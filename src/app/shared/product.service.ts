import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Product } from "../app.models";

@Injectable()
export class ProductService {
    private restUrl = "http://localhost:3000/wsproducts"
    constructor(private http:HttpClient){}  
    getProducts(){
        return this.http.get<Product[]>(this.restUrl)
    }
}