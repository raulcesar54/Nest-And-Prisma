import { Injectable } from '@nestjs/common';
import { message } from './message';

@Injectable()
export class MessagesService {

  private messages = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }

  async findById(id: number) {
    let message = this.messages.find((message) => message.id === id);
    if (!message) {
      throw Error(`Mensagem com o ID ${id} não encontrada`);
    }
    return message;

  }
  create(message: message) {
    return this.messages.push(message);
  }
  update(id: number, message: message) {
    const index = this.messages.findIndex((message) => message.id === id);
    this.messages[index] = message

    return message;
  }
  delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id)
    delete this.messages[index]

    return true
  }
}
