import { Injectable } from "@angular/core";
import { CartItem } from "../app.models";

@Injectable()
export class CartService {
    private cartData:CartItem[] = []
    getCartItems(){
        return this.cartData;
    }
    addCartItem(newcartitem:CartItem){
        this.cartData.push(newcartitem)
    }
    deleteCartItem(idx:number){
        this.cartData.splice(idx, 1);
    }
}