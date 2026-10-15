import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public service: MessagesService) {
    // DONT DO THIS ON REAL APPS, USE DEPENDENCY INJECTION INSTEAD
  }
  @Get()
  listMessages() {
    return this.service.findAll();
  }

  @Post()
  createMessage(@Body() message: CreateMessageDto) {
    this.service.create(message.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.service.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found!!!!!!!');
    }

    return message;
  }
}
