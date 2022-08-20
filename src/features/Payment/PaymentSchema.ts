import mongoose from 'mongoose';
import { PaymentType } from './PaymentTypes';
const Schema = mongoose.Schema;

export const PaymentSchema = new Schema({
    nameOnCard: String,
    cardNumber: String,
    expiryDate: String,
    cvv: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

PaymentSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

PaymentSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (ret: { _id?: string; }) { delete ret._id }
});

function modelAlreadyExists(): mongoose.Model<PaymentType> {
    try {
        return mongoose.model<PaymentType>('Payment');
    } catch (error) {
        return mongoose.model<PaymentType>('Payment', PaymentSchema);
    }
};

export const PaymentDocument = modelAlreadyExists();