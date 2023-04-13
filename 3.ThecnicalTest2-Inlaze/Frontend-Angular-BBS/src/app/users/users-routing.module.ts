import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProductsComponent } from './pages/products/products.component'
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'products',
        component:ProductsComponent
      },
      {
        path: '**',
        redirectTo: 'signup',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UsersRoutingModule {}
