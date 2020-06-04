import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryApi } from './category.service'; 
import { Category } from '../interfaces/category.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class ProductApi {
    constructor(private httpService: HttpClient) { }
    categoryList: Category[];
    product: Product;
    apiUrlGet = 'http://localhost:50694/api/Products/GetProducts/';
    apiUrlPost = 'http://localhost:50694/api/Products/AddProduct/';

    getCategories(){
        return this.httpService.get('http://localhost:50694/api/Categories/GetCategories/').subscribe(res =>
            this.categoryList = res as Category[]);
    }

    postProduct(product: Product){
        return this.httpService.post(this.apiUrlPost, product);
    }
}