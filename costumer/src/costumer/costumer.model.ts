import * as mongoose from 'mongoose';

export const CostumerSchema = new mongoose.Schema({
  CustomerName: String,
  ContactName: String,
  Address: String,
  City: String,
  PostalCode: Number,
  Country: String
});

export interface Costumer extends mongoose.Document {
    CostumerID: string,
    CustomerName: string,
    ContactName: string,
    Address: string,
    City: string,
    PostalCode: number,
    Country: string
}
