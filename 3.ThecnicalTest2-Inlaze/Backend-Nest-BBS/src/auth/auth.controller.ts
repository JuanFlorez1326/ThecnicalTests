import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';

@Controller('/users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  userAuth(@Body() signDto: authDto) {
    return this.authService.auth(signDto);
  }
}
