import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-indirect',
  templateUrl: './indirect.component.html',
  styleUrls: ['./indirect.component.css']
})
export class IndirectComponent implements OnInit {

  @Output() messageChanged: EventEmitter<null> = new EventEmitter();
  constructor(private messageService: MessageService) { }

  ngOnInit() { }

  setMessage(messageInput: HTMLInputElement) {
    const message = messageInput.value;
    messageInput.value = '';
    this.messageService.setMessage(message);
    this.messageChanged.emit(null);
  }
}
