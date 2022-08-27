import mongoose from 'mongoose';
import { ProductType } from '../types/Product';

mongoose.connect("mongodb://localhost:27017/rapteidb");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

ProductSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

ProductSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (ret: { _id?: string; }) { delete ret._id }
});

function modelAlreadyExists(): mongoose.Model<ProductType> {
    try {
        return mongoose.model<ProductType>('Products');
    } catch (error) {
        return mongoose.model<ProductType>('Products', ProductSchema);
    }
}

export default mongoose.models.Product || modelAlreadyExists();