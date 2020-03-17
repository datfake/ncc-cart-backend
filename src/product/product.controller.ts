import { Controller } from '@nestjs/common';
import { Get } from  '@nestjs/common';
import { Product } from './product.entity';
import {ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get('get')
    index(): Promise<Product[]> {
      console.log("api hit");
      return this.productService.findAll();

    } 

   


}

