import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent {

  constructor(
    public readonly userService: UserService
  ) { }
}
