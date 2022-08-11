import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { comparePasswordFunction, UsersType } from './UsersTypes';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    firstName: String,
    lastName: String,
    website: String,
    bioInfo: String,
    image: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const comparePassword: comparePasswordFunction = (requestedPassword, password) => {
    return bcrypt.compareSync(requestedPassword, password as string);
};


UserSchema.methods.comparePassword = comparePassword;

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (ret: { _id?: string; }) { delete ret._id }
});

function modelAlreadyExists(): mongoose.Model<UsersType> {
    try {
        return mongoose.model<UsersType>('User');
    } catch (error) {
        return mongoose.model<UsersType>('User', UserSchema);
    }
}
export const UserDocument = modelAlreadyExists();