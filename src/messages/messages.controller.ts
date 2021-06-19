import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { message as messageType } from './message';


@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) { }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(Number(params.id));
  }

  @Post()
  create(@Body() message:messageType) {
    return this.messagesService.create(message);
  }
}
