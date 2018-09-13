import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });

    service = TestBed.get(MessageService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return the message when getMessage is called', () => {
    const message = service.getMessage();
    expect(message).toBe('Default Message');
  });

  it('Should set the message when setMessage is called', () => {
    const message = 'Some new message';
    service.setMessage(message);

    const newMessage = service.getMessage();
    expect(newMessage).toBe(message);
  });
});
