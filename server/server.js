require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { connectDB, isDbConnected } = require('./config/db');
const recipeRoutes = require('./route/recipe.route');
const savedRecipeRoutes = require('./route/savedRecipe.route');
const authRoutes = require('./route/auth.route');
const userRoutes = require('./route/user.route');
const pantryItemRoutes = require('./route/pantryItem.route');
const { getRolesMock } = require('./controller/user.controller');

const app = express();

// CORS setup
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://servd-recipes.vercel.app',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        process.env.NODE_ENV !== 'production'
      ) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    database: {
      connected: isDbConnected(),
      type: 'MongoDB',
    },
    endpoints: [
      '/api/health',
      '/api/auth',
      '/api/users',
      '/api/recipes',
      '/api/saved-recipes',
      '/api/pantry-items',
    ],
  });
});

app.get('/', (req, res) => {
  res.send('AI Recipe Backend Server is running');
});

// Strapi compatibility mock for roles
app.get('/api/users-permissions/roles', getRolesMock);

// Primary API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/saved-recipes', savedRecipeRoutes);
app.use('/api/pantry-items', pantryItemRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Connect to Database & Start Server
connectDB();

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 AI Recipe Server is running on port ${PORT}`);
  console.log(`📡 Health check available at http://localhost:${PORT}/api/health`);
});

module.exports = { app, server };