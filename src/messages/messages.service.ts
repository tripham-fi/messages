import { MessagesRepository } from './messages.repository';

export class MessagesService {
  repository: MessagesRepository;

  constructor() {
    // service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    this.repository = new MessagesRepository();
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
