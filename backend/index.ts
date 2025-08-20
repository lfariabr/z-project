import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './src/schemas/typeDefs';
import resolvers from './src/resolvers';

const PORT = Number(process.env.PORT) || 4000;

async function start() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });
  console.log(`GraphQL endpoint ready at ${url}`);
}

start().catch((err) => {
  console.error('Failed to start Apollo server', err);
});