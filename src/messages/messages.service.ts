import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';


@Injectable()
export class MessagesService {

  constructor(public repository: MessagesRepository) {
    // service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  findAll() {
    return this.repository.findAll();
  }

  create(message: string) {
    this.repository.create(message);
  }
}
