const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const recipeRoutes = require('./route/recipe.route');
const savedRecipeRoutes = require('./route/savedRecipe.route');
const authRoutes = require('./route/auth.route');

const app = express();

require('dotenv').config();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', (req, res)=>{
    res.send('Server is running');
});

app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/saved-recipes', savedRecipeRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});