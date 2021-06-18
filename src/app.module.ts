import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddController } from './messages/add/add.controller';
import { MessagesController } from './messages/messages.controller';

@Module({
  imports: [],
  controllers: [AppController, AddController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
