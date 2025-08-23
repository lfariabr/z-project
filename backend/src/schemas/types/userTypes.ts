export const userTypes = `#graphql
type User {
  _id: ID!
  email: String!
  isSubscribed: Boolean!
  frequency: String
  createdAt: String!
}

input RegisterInput {
  name: String!
  email: String!
  password: String!
}

type Query {
  getUserById(id: ID!): User
}

type Mutation {
  registerUser(input: RegisterInput!): User
}
`;