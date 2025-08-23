// models/ScheduledTask.ts
import { Schema, model, Types } from 'mongoose'

const scheduledTaskSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['send_quote'], required: true },
  runAt: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' },
})

export default model('ScheduledTask', scheduledTaskSchema)
