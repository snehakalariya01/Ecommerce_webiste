const mongoose = require('mongoose');

const connectDB = async (MONGO_URI) => {
   try {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI is not defined');
  }

  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB");
  console.log("Database connected");
} catch (error) {
  console.log("Error connecting to database:", error.message);
}
};

module.exports = connectDB;