export const emailTypes = `#graphql
  type EmailResult {
    success: Boolean!
    message: String
    error: String
  }

  input SendWelcomeEmailInput {
    to: String!
  }

  extend type Mutation {
    sendWelcomeEmail(input: SendWelcomeEmailInput!): EmailResult!
  }
`;
