import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// to enable two way binding;
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMatComponent } from './nav-mat/nav-mat.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CategoryApi } from './shared/services/category.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { filterData } from './shared/pips/filter.pipe';
import { ProductApi } from './shared/services/product.service';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { LoginApi } from './shared/services/login.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFormComponent,
    ProductFormComponent,
    NavMatComponent,
    CategoryListComponent,
    filterData,
    UserComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CategoryApi , ProductApi , LoginApi , AuthGuard ,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
