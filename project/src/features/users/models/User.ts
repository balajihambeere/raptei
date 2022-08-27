import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { comparePasswordFunction, UserType } from '../types/User';

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

function modelAlreadyExists(): mongoose.Model<UserType> {
    try {
        return mongoose.model<UserType>('User');
    } catch (error) {
        return mongoose.model<UserType>('User', UserSchema);
    }
}
export default mongoose.models.User || modelAlreadyExists();