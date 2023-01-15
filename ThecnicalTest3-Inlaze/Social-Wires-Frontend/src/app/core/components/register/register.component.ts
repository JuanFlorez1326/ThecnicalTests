import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router
  ) {
    this.buildForm();
  }

  registerForm!: FormGroup;

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  sendUser = (event: Event) => {
    event.preventDefault();
    this.signUp(this.registerForm.value);
  };

  async signUp(user: User) {
    this.userService.registerUser(user)
    .subscribe((res: any) => {
      console.log(res)
      this.router.navigate(['/login'])
    })
  }
}
