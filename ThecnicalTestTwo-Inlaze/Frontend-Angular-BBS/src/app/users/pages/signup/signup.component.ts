import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { userInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  registerForm!: FormGroup;

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      verifyPassword: ['', [Validators.required]],
    });
  }

  saveForm = (event: Event) => {
    event.preventDefault();
    this.singup(this.registerForm.value);
  };

  async singup(user: userInterface) {
    const { username, password } = user;
    this.authService.signUp({ username, password }).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/home/signin']);
    });
  }
}
