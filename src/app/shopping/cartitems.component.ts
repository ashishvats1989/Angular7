import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../app.models';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {
  cartItems:CartItem[] = []
  constructor(private cs:CartService) { }

  ngOnInit() {
    this.cartItems = this.cs.getCartItems();
  }

  delete(idx:number) {
    this.cs.deleteCartItem(idx);
  }

  totalAmount(){
    let tot = 0;
    for(let e of this.cartItems){
      tot += (e.price * e.qty)
    }
    return tot;
  }
}
