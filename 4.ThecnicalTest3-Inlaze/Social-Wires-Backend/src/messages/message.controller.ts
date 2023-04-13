import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from '../auth/entities/auth.entity';
import { DataService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { Messages } from './entities/message.entity';

@ApiTags('Messages')
@Controller('messages')
export class DataController {

  constructor(
    private readonly dataService: DataService
  ) {}

  @Post()
  @Auth()
  @ApiResponse({ status: 201, description: 'Message was created successfully.', type: Messages })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(
    @Body() createMessageDto: CreateMessageDto,
    @GetUser() user: User
  ): Promise<Messages> {
    return this.dataService.create(createMessageDto, user);
  }

  @Get()
  findAll(): Promise<Messages[]> {
    return this.dataService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string): Promise<Messages> {
    return this.dataService.findOne(term);
  }

  @Get('my/:userId')
  findMyMessages(
    @Param('userId', ParseUUIDPipe) userId: string
  ) {
    return this.dataService.findMyMessages(userId);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateMessageDto: UpdateMessageDto
  ): Promise<Messages> {
    return this.dataService.update(id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string ): Promise<Messages> {
    return this.dataService.remove( id );
  }
}