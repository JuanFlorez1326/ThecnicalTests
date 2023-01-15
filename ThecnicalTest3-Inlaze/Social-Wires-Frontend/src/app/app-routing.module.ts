import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './core/components/login/login.component';
import { MessagesComponent } from './core/components/messages/messages.component';
import { RegisterComponent } from './core/components/register/register.component';


const routes: Routes = [
  {
    path : "",
    redirectTo : "home",
    pathMatch : "full"
  },
  {
    path : "home",
    component : RegisterComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "messages",
    component : MessagesComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "messages/add",
    component : MessagesComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
