import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UsersRoutingModule } from './users-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [SignupComponent, SigninComponent, ProductsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService , TokenInterceptorService],
})
export class UsersModule {}
