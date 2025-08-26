import { userTypes } from "./types/userTypes.js";

const typeDefs = `#graphql
  type Query { _empty: String }
  type Mutation { _empty: String }
  type Subscription { _empty: String }
  ${userTypes}
`;
export default typeDefs;