import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'; // ye 4 khud add 
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart)
        private cartRepository: Repository<Cart>,
    ) { }

    async  findAll(): Promise<Cart[]> {
        return await this.cartRepository.find();
    }

    async  findByProductId(id : number): Promise<Cart> {
        return await this.cartRepository.findOne({ where: { idPro: id} });
    }

    async  create(cart: Cart): Promise<Cart> {
        return await this.cartRepository.save(cart);
    }

    async update(cart: Cart): Promise<UpdateResult> {
        return await this.cartRepository.update(cart.id, cart);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.cartRepository.delete(id);
    }
}
