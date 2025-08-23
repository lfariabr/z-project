import { questionTypes } from "./types/questionTypes.js";
import { userTypes } from "./types/userTypes.js";
import { quoteTypes } from "./types/quoteTypes.js";

const typeDefs = `#graphql
  ${questionTypes}
  ${userTypes}
  ${quoteTypes}

  type Query {
    health: String!
    questions(limit: Int, offset: Int): [Question!]!
  }

  type Mutation {
    # MVP: trigger an immediate email delivery without auth
    sendQuote(email: String!, explicit: Boolean!): Boolean!
  }
`;

export default typeDefs;