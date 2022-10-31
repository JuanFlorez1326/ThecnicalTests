import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Admin } from 'src/admin/entities/admin.entity';

import * as bcrypt from 'bcrypt';
import { authDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from './interfaces/payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async auth(authdto: authDto) {
    const { username, password } = authdto;
    const user = username.replace(' ', '_').toLowerCase();

    let userFind = await this.userRepository.findOne({
      where: { username: user },
      select: { username: true, password: true },
    });

    if (!userFind) {
      userFind = await this.adminRepository.findOne({
        where: { username: user },
      });
    }

    if (!userFind)
      throw new UnauthorizedException('credentials invalid (username)');

    if (!bcrypt.compareSync(password, userFind.password))
      throw new UnauthorizedException('credentials invalid (password)');

    delete userFind.password;

    return {
      ...userFind,

      token: this.generateJwt({ username: userFind.username }),
    };
  }

  private generateJwt(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
