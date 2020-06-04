import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { LoginModel } from '../interfaces/login.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginApi {
    constructor(private httpService: HttpClient ,
                private router: Router) { }
    loginForm: LoginModel;

    private loggedIn = new BehaviorSubject<boolean>(false);
    private userName = new BehaviorSubject<string>(localStorage.getItem('username'));

    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
      }

    get currentUserName(){
      return this.userName.asObservable();
    }

    userAuthentication(loginModel: LoginModel){
        // tslint:disable-next-line: prefer-const
        let reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth': 'true'});
        return this.httpService.post('http://localhost:50694/api/Jwt/GenerateToken/',
            loginModel , {headers: reqHeader}).subscribe((data: string) => {
            localStorage.setItem('usertoken', data);
            this.router.navigate(['']);
            this.loggedIn.next(true);
            localStorage.setItem('username', loginModel.userName);
            this.userName.next(localStorage.getItem('username'));
          },
          (err: HttpErrorResponse) => {
          });;
    }

    logout() {                            // {4}
        this.loggedIn.next(false);
        localStorage.removeItem('username');
        localStorage.removeItem('usertoken');
        this.router.navigateByUrl('/login');
    }
}