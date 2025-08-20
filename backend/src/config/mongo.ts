import mongoose from 'mongoose';

export async function connectMongo(uri = process.env.MONGO_URI!) {
  if (!uri) throw new Error('MONGO_URI not set');
  await mongoose.connect(uri);
  console.log('[mongo] connected');
}
