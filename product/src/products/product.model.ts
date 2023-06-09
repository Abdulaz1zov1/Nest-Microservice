import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

export interface Product extends mongoose.Document {
    ProductID: string,
    name: string,
    description: string,
    price: number,
}
