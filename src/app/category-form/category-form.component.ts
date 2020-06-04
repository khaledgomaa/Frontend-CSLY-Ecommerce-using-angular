import { Component, OnInit } from '@angular/core';
import { CategoryApi } from '../shared/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor(public categoryTapi: CategoryApi, private toastr: ToastrService) { }

  message = 'from category binding';
  resetForm(form?: NgForm){
    if(form != null){form.reset(); }
    this.categoryTapi.category = {
      CategoryId: 0,
      CategoryName: null,
      IsActive: true
    };
  }
  insertCat(form: NgForm){
    this.categoryTapi.postCategory(form.value).subscribe(res => {
      this.toastr.success(form.value.CategoryName + ' has beed added succefully');
      this.resetForm();
      this.categoryTapi.getCategoryPagination(2,1);
    });
  }
  onClick(form: NgForm){
    if (form.value.CategoryId === 0)
      {this.insertCat(form); }
    else{
      this.categoryTapi.updateCategory(form.value.CategoryId , form.value).subscribe(res => {
        this.toastr.success('Category has been updated');
        this.resetForm();
        this.categoryTapi.getCategory();
        });
      }
  }
  ngOnInit(): void {
    this.resetForm();
  }

}
