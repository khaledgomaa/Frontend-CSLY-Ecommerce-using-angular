import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../shared/services/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FileDetector } from 'protractor';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(public productapi: ProductApi , private toastr: ToastrService) { }

  fileToUpload: File = null;
  imageUrl: string = null;
  imagePath: string = null;

  onFileSelected(file: FileList){
    this.fileToUpload = file.item(0);

    // show the image
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  updateCategories(){
    this.productapi.getCategories();
  }

  resetForm(form?: NgForm){
    if(form != null){form.reset(); }
    this.productapi.product = {
      ProductId: 0,
      ProductName: null,
      CategoryId: null,
      ImagePath: null,
      Amount: null,
      Price: null,
    }
  }


  insertProduct(form: NgForm){
    form.value.ImagePath = this.imageUrl;
    this.productapi.postProduct(form.value).subscribe(res=> {
      this.toastr.success(form.value.ProductName + ' has been added successfully');
      this.resetForm();
    });
  }


  onClick(form: NgForm){
    if(form.value.ProductId === 0)
    {
      this.insertProduct(form);
    }
    else
    {}
  }

  ngOnInit(): void {
    this.resetForm();
    this.updateCategories();
  }

}
