import { questionTypes } from "./types/questionTypes.js";

const typeDefs = `#graphql
  ${questionTypes}

  type Query {
    health: String!

    questions(limit: Int, offset: Int): [Question!]!
  }
`;

export default typeDefs;