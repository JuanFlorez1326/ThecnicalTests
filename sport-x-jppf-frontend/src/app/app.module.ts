import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PqrComponent } from './components/pqr/pqr.component';
import { UsersComponent } from './components/users/users.component';
import { FooterComponent } from './components/footer/footer.component';
import { PqrService } from './service/pqr.service';
import { UsersService } from './service/users.service';
import { HttpClientModule } from '@angular/common/http';
import { FormPqrComponent } from './components/form-pqr/form-pqr.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PqrComponent,
    UsersComponent,
    FooterComponent,
    FormPqrComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PqrService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
