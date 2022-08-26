import mongoose from "mongoose";

export interface AddressType extends mongoose.Document {
    id?: string,
    firstName: string,
    lastName: string,
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}