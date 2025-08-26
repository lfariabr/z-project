import Users from './users/index.js'

export default {
  Query: {
    ...Users.Query,
  },
  Mutation: {
    ...Users.Mutation,
  },
  Subscription: {
    ...Users.Subscription,
  },
}
