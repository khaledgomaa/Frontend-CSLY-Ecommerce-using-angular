import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginApi } from 'src/app/shared/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public loginapi: LoginApi, private router: Router) { }

  isLoginErr = false;

  resetForm(form?: NgForm){
    if(form != null){form.reset(); }
    this.loginapi.loginForm = {
      userName: null,
      Password: null,
    };
  }

  onSubmit(form: NgForm){
    this.loginapi.userAuthentication(form.value);
  }
  ngOnInit(): void {
    this.resetForm();
  }

}
