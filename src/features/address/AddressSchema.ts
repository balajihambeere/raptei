import mongoose from 'mongoose';
import { AddressType } from './AddressTypes';

const Schema = mongoose.Schema;

export const AddressSchema = new Schema({
    firstName: String,
    lastName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});


AddressSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

AddressSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (ret: { _id?: string; }) { delete ret._id }
});

function modelAlreadyExists(): mongoose.Model<AddressType> {
    try {
        return mongoose.model<AddressType>('Address');
    } catch (error) {
        return mongoose.model<AddressType>('Address', AddressSchema);
    }
}
export const AddressDocument = modelAlreadyExists();