import mongoose, { Schema, Document } from 'mongoose'

export interface IQuestion extends Document {
    userEmail: string;
    text: string;
    modelUsed: string;
}

const QuestionSchema = new Schema(
    {
    userEmail: { type: String, required: true, lowercase: true, trim: true },
    text: { type: String, required: true },
    modelUsed: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model<IQuestion>('Scream', QuestionSchema);