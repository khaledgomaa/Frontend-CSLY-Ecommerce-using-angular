import { Component, OnInit } from '@angular/core';
import { CategoryApi } from '../shared/services/category.service';
import {Category} from '../shared/interfaces/category.interface';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(public categoryTapi: CategoryApi , private toastr: ToastrService) { }

  searchValue: string;
  count = 1;
  check = true;
  statusList = [ 2, 5, 10 ];
  currentStatus = 2;
 
  detectNext(){
    this.count++;
    this.refreshList();
    if(this.count >1){this.check = false; }
  }
  detectPrevious(){
    this.count--;
    this.refreshList();
    if(this.count === 1){this.check = true;}
  }

  changeStatus(){
    this.refreshList();
  }

  refreshList(){
    this.categoryTapi. getCategoryPagination(this.currentStatus , this.count);
  }

  deleteRecord(id: number){
    this.categoryTapi.deleteCategory(id).subscribe(res => {
      this.refreshList();
      this.toastr.success('Category has beed deleted');
    })
  }

  populateForm(category: Category){
    this.categoryTapi.category = Object.assign({},category);
  }

  ngOnInit(){
    this.refreshList();
  }

}
