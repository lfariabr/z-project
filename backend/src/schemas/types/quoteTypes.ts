export const quoteTypes = `#graphql
type Quote {
  _id: ID!
  text: String!
  tone: String! # e.g., "clean" or "explicit"
  createdAt: String!
}
`;