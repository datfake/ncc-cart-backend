import { Controller } from '@nestjs/common';
import { Post,Put, Delete, Body, Param, Get } from  '@nestjs/common';
import { Cart } from './cart.entity';
import {CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService){}

    @Get()
    index(): Promise<Cart[]> {
      console.log("api hit");
      return this.cartService.findAll();
    } 

    @Get(':id')
    async indexID(@Param('id') id):Promise<Cart> {
      console.log("api hit");
      return await this.cartService.findByProductId(id);
    } 

    @Post('create')
    async create(@Body() cartData: Cart): Promise<any> {
      const cartExits = await this.cartService.findByProductId(cartData.idPro);
      console.log(cartExits,"ashjhasjhsjhash")
      if(cartExits) {
        cartExits.qty++;
        return await this.cartService.update(cartExits);
      }
      else     return await this.cartService.create(cartData);//We use the @Body decorator to extract and inject the body of the POST request in the create() method. 
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> { //We extract and inject the id using the @Param() decorator and we call the delete() method of cartsService.
      return this.cartService.delete(id);
    }  

    @Put(':id')
    async update(@Param('id') id, @Body() cartData: Cart): Promise<any> {
        //console.log('Update #' + cartData.idPro)
        const cart =await this.cartService.findByProductId(id);
        console.log(cart,1221)
        cartData.id = Number(cart.id);
        return await this.cartService.update(cartData);
    }  

}

