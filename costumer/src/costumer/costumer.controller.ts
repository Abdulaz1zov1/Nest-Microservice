import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { CostumerService } from './costumer.service';

@Controller('costumers')
export class ProductController {
  constructor(private readonly costumerService: CostumerService) {}

  @Post()
  async addProduct(
    @Body('CustomerName') prodName: string,
    @Body('ContactName') prodContact: string,
    @Body('Address') prodAddress: string,
    @Body('City') prodCity: string,
    @Body('PostalCode') prodPostal: number,
    @Body('Country') prodCountry: string,
  ) {
    const generatedId = await this.costumerService.insertCostumer(
      prodName,
      prodContact,
      prodAddress,
      prodCity,
      prodPostal,
      prodCountry
    );
    return { id: generatedId };
  }

  @Get()
  async getAllProducts() {
    const products = await this.costumerService.getCostumers();
    return products;
  }

 

  // @Delete(':id')
  // async removeProduct(@Param('id') prodId: string) {
  //   await this.productService.deleteCostumer(prodId);
  //   return null;
  // }
}
