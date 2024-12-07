import mongoose, { Schema, Document } from 'mongoose';

export interface IItem extends Document {
    name: string;
    description?: string;
}

const ItemSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, default: '' },
    },
    { timestamps: true }
);

const Item = mongoose.model<IItem>('Item', ItemSchema);

export default Item;