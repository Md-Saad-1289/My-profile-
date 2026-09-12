import mongoose, { Schema, Document } from 'mongoose';

export interface IAbout extends Document {
  name: string;
  email: string;
  bio: string;
  profileImage: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const aboutSchema = new Schema<IAbout>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    bio: String,
    profileImage: String,
    skills: [String],
    social: {
      github: String,
      linkedin: String,
      twitter: String,
      portfolio: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IAbout>('About', aboutSchema);
