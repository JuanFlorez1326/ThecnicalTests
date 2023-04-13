import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.sass']
})
export class LoginComponent {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router
  ) { 
    this.buildForm();
  }

  loginForm!: FormGroup;

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  sendUserLogin = (event: Event) => {
    event.preventDefault();
    this.loginUser(this.loginForm.value);
  }

  async loginUser(user: User) {
    this.userService.loginUser(user)
    .subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/messages']);
      console.log(res)
    })
  }
}