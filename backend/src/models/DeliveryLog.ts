// models/DeliveryLog.ts
import { Schema, model, Types } from 'mongoose'

const deliverySchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  quoteId: { type: Types.ObjectId, ref: 'Quote' },
  sentAt: { type: Date, default: Date.now },
  channel: { type: String, enum: ['email', 'web'], default: 'web' },
})

export default model('DeliveryLog', deliverySchema)