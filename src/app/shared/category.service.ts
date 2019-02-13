import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Category } from "../app.models";

@Injectable()
export class CategoryService {
    private restUrl = "http://localhost:3000/wscategories"
    constructor(private http:HttpClient) {}
    getCategories(){
        return this.http.get<Category[]>(this.restUrl)
    }
}