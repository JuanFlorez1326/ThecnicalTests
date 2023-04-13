import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/users.service';
import { httpService } from './services/http.service';
import { MessagesComponent } from './components/messages/messages.component';
import { CreateMsgComponent } from './components/create-msg/create-msg.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    RegisterComponent,
    FooterComponent,
    BannerComponent,
    LoginComponent,
    MessagesComponent,
    CreateMsgComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [UserService, httpService],
  exports: [
    RegisterComponent,
    FooterComponent,
    BannerComponent,
    LoginComponent,
  ],
})
export class CoreModule {}
