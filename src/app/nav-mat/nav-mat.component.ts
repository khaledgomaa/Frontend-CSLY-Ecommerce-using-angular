import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginApi } from '../shared/services/login.service';

@Component({
  selector: 'app-nav-mat',
  templateUrl: './nav-mat.component.html',
  styleUrls: ['./nav-mat.component.css']
})
export class NavMatComponent {

  constructor(private router: Router , private loginService: LoginApi) {}

  loginStatus$: Observable<boolean>;
  userName$: Observable<string>;

  logout(){
    this.loginService.logout();
    this.loginStatus$ = this.loginService.isLoggedIn;
    this.userName$ = this.loginService.currentUserName;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.loginStatus$ = this.loginService.isLoggedIn;
    this.userName$ = this.loginService.currentUserName;
  }
}
