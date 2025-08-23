// models/Quote.ts
import { Schema, model, Types } from 'mongoose'

const quoteSchema = new Schema({
  text: { type: String, required: true },
  tone: { type: String, enum: ['clean', 'explicit'], default: 'clean' },
  createdAt: { type: Date, default: Date.now },
})

export default model('Quote', quoteSchema)
