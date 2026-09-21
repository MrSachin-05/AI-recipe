const mongoose = require('mongoose');
const dns = require('dns');

// Configure public DNS servers to resolve MongoDB Atlas SRV records on Windows
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  // Ignore DNS config failure if restricted in environment
}

let isConnected = false;

const connectDB = async () => {
  const primaryUri = process.env.MONGO_URI;
  const localFallbackUri = process.env.LOCAL_MONGO_URI || 'mongodb://127.0.0.1:27017/ai_recipes';

  if (!primaryUri && !localFallbackUri) {
    console.warn('⚠️ No MONGO_URI specified in environment.');
    return false;
  }

  // Attempt 1: Try Primary URI (e.g., MongoDB Atlas)
  if (primaryUri) {
    try {
      console.log('🔄 Attempting MongoDB connection...');
      const conn = await mongoose.connect(primaryUri, {
        serverSelectionTimeoutMS: 5000,
      });
      isConnected = true;
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      return true;
    } catch (error) {
      console.warn(`⚠️ Primary MongoDB connection failed (${error.message}).`);
    }
  }

  // Attempt 2: Try Local Fallback URI
  try {
    console.log(`🔄 Attempting fallback connection to local MongoDB (${localFallbackUri})...`);
    const conn = await mongoose.connect(localFallbackUri, {
      serverSelectionTimeoutMS: 2000,
    });
    isConnected = true;
    console.log(`✅ Connected to local MongoDB fallback: ${conn.connection.host}`);
    return true;
  } catch (fallbackError) {
    console.warn(`⚠️ Local MongoDB fallback also unavailable (${fallbackError.message}).`);
    console.warn('💡 The server is running in offline database mode. Please verify MONGO_URI in server/.env when ready.');
    isConnected = false;
    return false;
  }
};

const isDbConnected = () => isConnected && mongoose.connection.readyState === 1;

module.exports = { connectDB, isDbConnected };
