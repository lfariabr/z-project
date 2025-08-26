import * as UserQueries from './queries/index.js';
import * as UserMutations from './mutations/index.js';
import * as UserSubscriptions from './subscriptions/index.js';

export default {
  Query: {
    ...UserQueries,
  },
  Mutation: {
    ...UserMutations,
  },
  Subscription: {
    ...UserSubscriptions,
  },
};
