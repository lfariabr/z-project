// User subscription resolvers
import { pubsub, USER_CREATED } from '../../utils/pubsub.js'

export const userCreated = {
  // Cast pubsub to any to access asyncIterator when TS types are strict
  subscribe: () => (pubsub as any).asyncIterator([USER_CREATED]),
  // Optionally map payload shape if needed
  resolve: (payload: any) => payload.userCreated,
}

// NOTE: Do not re-export the same symbol again to avoid TS redeclare errors.