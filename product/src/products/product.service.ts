import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(name: string, description: string, price: number) {
    const newProduct = new this.productModel({
      name,
      description,
      price,
    });
    const result = await newProduct.save();
    return {ProductID: result.id, name: result.name, description: result.description, price: result.price}
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id: prod.id,
      name: prod.name,
      description: prod.description,
      price: prod.price,
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId)[0];
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
    };
  }

  async updateProduct(
    productId: string,
    name: string,
    desc: string,
    price: number,
  ) {
    const updatedProduct = await this.findProduct(productId);
    if (name) {
      updatedProduct.name = name;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    updatedProduct.save();
  }

  async deleteProduct(prodId: string) {
    const result = await this.productModel.deleteOne({_id: prodId}).exec()
    // if(result.n === 0) {
    //     throw new NotFoundException('Could not find product')
    // }
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find product');
    }

    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return product;
  }
}
