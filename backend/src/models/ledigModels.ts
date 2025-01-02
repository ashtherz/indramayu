import mongoose, { Schema, Document } from 'mongoose';

export interface ILedig extends Document {
    date: string;
    progLedig: string;
    totalImplementation: number;
}

const LedigSchema = new Schema<ILedig>({
    date: { type: String, required: true },
    progLedig: { type: String, required: true },
    totalImplementation: { type: Number, required: true },
});

export default mongoose.model<ILedig>('Ledig', LedigSchema);
