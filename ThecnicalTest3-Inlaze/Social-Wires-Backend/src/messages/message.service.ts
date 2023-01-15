import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/auth.entity';
import { validate as isUUID } from 'uuid';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Messages } from './entities/message.entity';

@Injectable()
export class DataService {

  constructor(
    @InjectRepository(Messages)
    private messageRepository: Repository<Messages>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(createMessageDto: CreateMessageDto, user: User) {
    try {
      const message = this.messageRepository.create({ ...createMessageDto, user });
      await this.messageRepository.save(message);
      return message;
    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  async findAll() {
    try {
      const messages = await this.messageRepository.find();
      return messages
    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  async findOne(term: string) {
    try {
      let msg: Messages;
      if ( isUUID(term)) {
        msg = await this.messageRepository.findOneBy({ id: term })   
      } else {
        msg = await this.messageRepository.findOneBy({ title: term })
      }
      return msg;
      
    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  async findMyMessages(userId: string) {
    try {
      const messages = await this.messageRepository.find({ where: { user: { id: userId } } });
      return messages;
    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    try {
      const message = await this.messageRepository.preload({ id: id, ...updateMessageDto })

      if (!message) 
        throw new NotFoundException(`Message Not Found`);

      const updatedMessage = await this.messageRepository.save(message);
      return updatedMessage;

    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  async remove(id: string) {
    try {
      const msg = await this.findOne( id )
      const detetedProduct = await this.messageRepository.remove ( msg )
      return detetedProduct;
    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  private handleDBErrors(error: any): never {
    if ( error.code === '23505' ) 
      throw new BadRequestException( error.detail );

    console.log(error)
    throw new InternalServerErrorException('Please check server logs');
  }
}
