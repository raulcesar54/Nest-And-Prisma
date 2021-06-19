import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
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
    return this.messagesService.findById(Number(params.id)).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
  @Post()
  create(@Body() message: messageType) {
    return this.messagesService.create(message);
  }
  @Put(':id')
  update(@Param() params, @Body() message: messageType) {
    return this.messagesService.update(Number(params.id), message);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(Number(params.id));
  }
}
