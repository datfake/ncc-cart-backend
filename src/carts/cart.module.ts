import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller'; // ye 3 khud se likhny
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';


@Module({
  providers: [CartService],
  controllers: [CartController] ,//add it
  imports: [

    TypeOrmModule.forFeature([Cart]), //add it, forFeature() method to define which repositories are registered in the current scope. 
  ],                                      // now typeorm will recognize the cart entity
})
export class CartModule {}
