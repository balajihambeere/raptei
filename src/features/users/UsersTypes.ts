import mongoose from 'mongoose';

export type comparePasswordFunction = (requestedPassword: string, password: string | null) => boolean;

export interface UsersType extends mongoose.Document {
    email: string;
    password: string | null;
    firstName: string;
    lastName: string;
    website?: string;
    bioInfo?: string;
    image?: string;
    createdDate: Date;
    comparePassword: comparePasswordFunction;
}
