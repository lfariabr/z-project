export const REGISTER_USER_MUTATION = `#graphql
  mutation RegisterUser($input: RegisterInput!) {
    registerUser(input: $input) {
      _id
      email
      name
      isExplicit
      subscribed
      createdAt
    }
  }
`;