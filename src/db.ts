import mongoose from 'mongoose';

import 'dotenv/config';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string); // MONGO_URI is the connection string
    console.log('MongoDB connected');
  } catch (error: any) {
    console.log(error);
  }
};
