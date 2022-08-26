import mongoose from "mongoose";

export interface PaymentType extends mongoose.Document {
    nameOnCard: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
};
