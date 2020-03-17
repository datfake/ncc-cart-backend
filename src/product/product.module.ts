import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';


@Module({
  providers: [ProductService],
  controllers: [ProductController] ,//add it
  imports: [

    TypeOrmModule.forFeature([Product]), //add it, forFeature() method to define which repositories are registered in the current scope. 
  ],                                      // now typeorm will recognize the cart entity
})
export class ProductModule {}
