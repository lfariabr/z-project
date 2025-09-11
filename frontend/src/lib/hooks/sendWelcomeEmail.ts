export const SEND_WELCOME_EMAIL_MUTATION = `#graphql
  mutation SendWelcomeEmail($input: SendWelcomeEmailInput!) {
    sendWelcomeEmail(input: $input) {
      success
      error
    }
  }
`;
