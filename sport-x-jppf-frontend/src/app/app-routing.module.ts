import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PqrComponent } from './components/pqr/pqr.component';
import { UsersComponent } from './components/users/users.component';
import { FormPqrComponent } from './components/form-pqr/form-pqr.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'register',
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: 'pqr',
    component: PqrComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: FormPqrComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit/:id',
    component: FormPqrComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
