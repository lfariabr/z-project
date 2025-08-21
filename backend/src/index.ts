import 'dotenv/config';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './resolvers/index.js';

const PORT = Number(process.env.PORT) || 4000;
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/conci';


async function start() {
  try {
    console.log('Connecting to MongoDB...', MONGO_URI);
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed', err);
    process.exit(1); 
  }
  
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });
  console.log(`GraphQL endpoint ready at ${url}`);
}

start().catch((err) => {
  console.error('Failed to start Apollo server', err);
});