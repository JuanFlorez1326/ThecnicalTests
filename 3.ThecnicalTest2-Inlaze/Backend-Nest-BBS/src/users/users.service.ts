import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ErrorsService } from '../common/services/errors/errors.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly errorService: ErrorsService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...props } = createUserDto;
      const user = this.userRepository.create({
        ...props,
        password: await bcrypt.hash(password, 10),
      });
      await this.userRepository.save(user);
      delete user.password;
      return { user };
    } catch (error) {
      return this.errorService.handlignError(error);
    }
  }

  async findAll() {
    const users = await this.userRepository.find({});
    return users;
  }

  async findToKey(key: string) {
    try {
      const QueryBuilder = this.userRepository.createQueryBuilder('us');
      const user = await QueryBuilder.where(
        'us.username = :name or us.email = :email',
        {
          name: key.replace(' ', '_').toLowerCase(),
          email: key.replace(' ', '_').toLowerCase(),
        },
      ).getOne();
      if (!user) throw new NotFoundException();
      return user;
    } catch (error) {
      this.errorService.handlignError(error);
    }
  }
}
