import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product, CartItem } from '../app.models';
import { CartService } from '../shared/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products:Product[] = []
  myDate = new Date();
  queryString = ""
  constructor(private ps:ProductService, private cs:CartService, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ps.getProducts().subscribe(
      (data) => {
        /*console.log("Success ", data)
        this.products = data;*/
        this.ar.params.subscribe((params) => {
          let paramId = params.ctgid;
          if(paramId == undefined) {
            this.products = data
          } else {
            this.products = data.filter((e) => e.ctgid == paramId)
          }
        }, err => console.log("Param Error ", err))
      }, (err) => {
        console.log("Error ", err)
      }
    )
  }

  addToCart(selectedProduct:Product){
    let item = new CartItem(selectedProduct.id, selectedProduct.name, selectedProduct.price, 1)
    this.cs.addCartItem(item);
  }
}
