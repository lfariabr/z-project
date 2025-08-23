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

  # type Mutation {
  #   # createQuestion(input: CreateQuestionInput!): Question!
  #   # updateQuestion(id: ID!, input: UpdateQuestionInput!): Question!
  #   # deleteQuestion(id: ID!): Boolean!

  #   # createUser(input: CreateUserInput!): User!
  #   # updateUser(id: ID!, input: UpdateUserInput!): User!
  #   # deleteUser(id: ID!): Boolean!

  #   # createQuote(input: CreateQuoteInput!): Quote!
  #   # updateQuote(id: ID!, input: UpdateQuoteInput!): Quote!
  #   # deleteQuote(id: ID!): Boolean!
  # }
`;

export default typeDefs;