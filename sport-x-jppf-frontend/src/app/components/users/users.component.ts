import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Users } from 'src/app/models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: Users = {
    id: 0,
    names: '',
    surnames: '',
    mobile_phone: '',
    landline: '',
    email: '',
    type_id: '',
    number_id: 0
  };

  constructor(private userService: UsersService, private route : Router) { }

  ngOnInit() {

  }

  saveNewUser() {
    delete this.user.id;
    this.userService.saveUser(this.user).subscribe(
      (response) => {
        console.log(response);
        console.log("User saved successfully");
        this.route.navigate(['/add']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}