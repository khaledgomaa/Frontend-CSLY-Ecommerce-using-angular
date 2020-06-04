import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { NavMatComponent } from './nav-mat/nav-mat.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes=[
    {path: '' , component: CategoryFormComponent},
    {
        path: 'login' , component: UserComponent,
        children: [{path: '' , component: SignInComponent }]
    },
    {
        path: 'signup' , component: UserComponent,
        children: [{path: '' , component: SignUpComponent}]
    },
    {path: 'categories' , component: CategoryFormComponent , canActivate: [AuthGuard]},
    {path: 'products' , component: ProductFormComponent , canActivate: [AuthGuard]}

]