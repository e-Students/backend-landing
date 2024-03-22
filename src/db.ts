import mongoose from 'mongoose';

import 'dotenv/config';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string); // MONGO_URI is the connection string
    console.log('MongoDB connected');
  } catch (error: any) {
    console.log('MongoDB connection failed');
  }
};
