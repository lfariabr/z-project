import { userTypes } from "./types/userTypes.js";
import { emailTypes } from "./types/emailTypes.js";

const typeDefs = `#graphql
  type Query { _empty: String }
  type Mutation { _empty: String }
  type Subscription { _empty: String }
  ${userTypes}
  ${emailTypes}
`;
export default typeDefs;