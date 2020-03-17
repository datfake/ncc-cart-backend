import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'; // ye 4 khud add 
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    async  findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

}
