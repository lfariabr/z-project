import Users from './users/index.js'
import Email from './email/index.js'

export default {
  Query: {
    ...Users.Query,
  },
  Mutation: {
    ...Users.Mutation,
    ...Email.Mutation,
  },
  Subscription: {
    ...Users.Subscription,
  },
}
