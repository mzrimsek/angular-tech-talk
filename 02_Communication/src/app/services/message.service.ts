import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  private message = 'Default Message';
  constructor() { }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }
}
