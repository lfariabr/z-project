export const userTypes = `#graphql
type User {
  _id: ID!
  email: String!
  name: String
  isExplicit: Boolean!
  subscribed: Boolean!
  frequency: String
  createdAt: String!
}

input RegisterInput {
  email: String!
  name: String
  isExplicit: Boolean
}

extend type Query {
  getUserById(id: ID!): User
  listUsers(limit: Int = 20, offset: Int = 0): [User!]!
}

extend type Mutation {
  registerUser(input: RegisterInput!): User
}

extend type Subscription {
  userCreated: User!
}
`;