// models/Subscription.ts
import { Schema, model, Types } from 'mongoose'

const subscriptionSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  stripeSubId: { type: String, required: true },
  status: { type: String, enum: ['active', 'canceled', 'past_due'], default: 'active' },
  startedAt: { type: Date, default: Date.now },
  endedAt: Date,
})

export default model('Subscription', subscriptionSchema)
