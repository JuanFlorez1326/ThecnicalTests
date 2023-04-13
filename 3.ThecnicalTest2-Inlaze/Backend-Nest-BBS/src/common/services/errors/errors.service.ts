import { Injectable, BadRequestException } from '@nestjs/common';
import { ErrorI } from '../../interfaces/error.interface';
import { codeError } from 'src/common/enums/errors.enum';

@Injectable()
export class ErrorsService {
  handlignError(error: ErrorI) {
    const { code } = error;
    if (+code === codeError.duplicy)
      throw new BadRequestException('User already exists');
    throw new BadRequestException();
  }
}
