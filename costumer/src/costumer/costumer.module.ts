import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './costumer.controller';
import { CostumerSchema } from './costumer.model';
import { CostumerService } from './costumer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Costumer', schema: CostumerSchema }]),
  ],
  controllers: [ProductController],
  providers: [CostumerService],
})
export class ProductsModule {}
