import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  gitHubLink?: string;
  liveLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    technologies: [String],
    gitHubLink: String,
    liveLink: String,
  },
  { timestamps: true }
);

export default mongoose.model<IProject>('Project', projectSchema);
