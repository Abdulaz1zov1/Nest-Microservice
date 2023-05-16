import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './costumer/costumer.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://user:123@cluster0.5wrygo3.mongodb.net/?retryWrites=true&w=majority',
    ),
  ]
})
export class AppModule {}
