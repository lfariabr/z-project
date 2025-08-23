// models/User.ts
import { Schema, model, Types } from 'mongoose'

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  isExplicit: { type: Boolean, default: false }, // profanity setting
  frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'daily' },
  subscribed: { type: Boolean, default: false },
  stripeCustomerId: String,
  createdAt: { type: Date, default: Date.now },
})

export default model('User', userSchema)
