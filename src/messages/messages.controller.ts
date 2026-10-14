import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'list';
  }

  @Post()
  createMessage(@Body() content: CreateMessageDto) {
    console.log(content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return `This id = ${id}`;
  }
}
