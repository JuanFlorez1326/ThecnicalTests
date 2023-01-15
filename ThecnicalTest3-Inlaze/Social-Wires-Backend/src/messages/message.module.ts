import { Module } from '@nestjs/common';
import { DataService } from './message.service';
import { DataController } from './message.controller';
import { Messages } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DataController],
  providers: [DataService],
  imports: [
    TypeOrmModule.forFeature([ Messages ]),
    AuthModule
  ],
})
export class DataModule {}
