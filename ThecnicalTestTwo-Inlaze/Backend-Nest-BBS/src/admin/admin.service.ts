import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { ErrorsService } from 'src/common/services/errors/errors.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly errorService: ErrorsService,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    try {
      const { password, ...props } = createAdminDto;
      const admin = this.adminRepository.create({
        ...props,
        password: await bcrypt.hash(password, 10),
      });
      await this.adminRepository.save(admin);
      delete admin.password;
      return { admin };
    } catch (error) {
      return this.errorService.handlignError(error);
    }
  }

  async findAll() {
    const admins = await this.adminRepository.find({
      relations: ['products'],
    });
    return admins;
  }
}
