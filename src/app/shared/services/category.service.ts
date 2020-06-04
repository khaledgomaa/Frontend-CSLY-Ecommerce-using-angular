import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CategoryApi {
    constructor(private httpService: HttpClient) { }
    category: Category;
    categoryList: Category[];
    apiUrlGet = 'http://localhost:50694/api/Categories/GetCategories/';
    apiUrlPost = 'http://localhost:50694/api/Categories/AddCategory/';
    apiUrlUpdate = 'http://localhost:50694/api/Categories/UpdateCategory/';
    apiUrlDelete = 'http://localhost:50694/api/Categories/DeleteCategory/';

    postCategory(category: Category){
        return this.httpService.post(this.apiUrlPost,category);
    }

    getCategory(){
        return this.httpService.get(this.apiUrlGet).subscribe(res =>
            this.categoryList = res as Category[]);
    }

    deleteCategory(id: number){
        return this.httpService.delete(this.apiUrlDelete + id);
    }

    updateCategory(id: number , category: Category){
        return this.httpService.put(this.apiUrlUpdate + id , category);
    }

    getCategoryPagination(status: number , pageNum: number){
        return this.httpService.get('http://localhost:50694/api/Categories/GetCategoriesPagination/' + status + '/' + pageNum)
        .subscribe(res =>
            this.categoryList = res as Category[]);
    }
}
