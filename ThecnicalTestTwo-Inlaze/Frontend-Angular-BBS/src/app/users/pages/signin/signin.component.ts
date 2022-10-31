import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../signup/signup.component.scss'],
})
export class SigninComponent {
  user: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.buildForm();
  }

  loginForm!: FormGroup;

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  saveForm = (event: Event) => {
    event.preventDefault();
    this.login(this.loginForm.value);
  };

  async login(user: userInterface) {
    this.authService.loggedIn(user).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res));
      if (res.role === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/products']);
      }
    });
  }
}
