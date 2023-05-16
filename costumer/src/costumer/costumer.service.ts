import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Costumer } from './costumer.model';

@Injectable()
export class CostumerService {
  private costumer: Costumer[] = [];

  constructor(
    @InjectModel('Costumer') private readonly costumerModel: Model<Costumer>,
  ) {}

  async insertCostumer(CustomerName: string, ContactName: string, Address: string, City: string, PostalCode: number, Country:string) {
    const newCostumer = new this.costumerModel({
      CustomerName,
      ContactName,
      Address,
      City,
      PostalCode,
      Country
    });
    const result = await newCostumer.save();
    return {CostumerID: result.id, CustomerName: result.CustomerName, ContactName: result.ContactName, Address: result.Address, City: result.City, PostalCode: result.PostalCode, Country: result.Country}
  }

  async getCostumers() {
    const costumers = await this.costumerModel.find().exec();
    return costumers.map((cost) => ({
      id: cost.id,
      CustomerName: cost.CustomerName,
      ContactName: cost.ContactName,
      Address: cost.Address,
      City: cost.City,
      PostalCode: cost.PostalCode,
      Country: cost.Country
    }));
  }



  // async deleteCostumer(prodId: string) {
  //   const result = await this.costumerModel.deleteOne({_id: prodId}).exec()
  // }

}
