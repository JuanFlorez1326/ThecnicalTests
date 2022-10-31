import { Module } from '@nestjs/common';
import { ErrorsService } from './services/errors/errors.service';

@Module({
  providers: [ErrorsService],
  exports: [ErrorsService],
})
export class CommonModule {}
