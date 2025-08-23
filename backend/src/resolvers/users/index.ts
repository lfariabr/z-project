import * as UserQueries from './queries';
import * as UserMutations from './mutations';
import * as UserSubscriptions from './subscriptions';

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
