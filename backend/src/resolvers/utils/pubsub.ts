import { PubSub } from 'graphql-subscriptions'

// Define event payloads for PubSub channels
export type PubSubEvents = {
  USER_CREATED: { userCreated: any }
}

// Singleton PubSub so publishers/subscribers share the same instance
export const pubsub = new PubSub<PubSubEvents>()

// Event constants
export const USER_CREATED = 'USER_CREATED' as const
