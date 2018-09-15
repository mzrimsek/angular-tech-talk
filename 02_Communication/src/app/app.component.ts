import { Component, OnInit } from '@angular/core';

import { MessageService } from './services/message.service';

import { CountEvent } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = 'Something from a variable - notice the brackets!';
  childCount: number;
  backgroundColor = '#ffffff';
  serviceMessage: string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.updateMessage();
  }

  setChildCount(event: CountEvent) {
    this.childCount = event.count;
  }

  setBackgroundColor() {
    this.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
  }

  updateMessage() {
    this.serviceMessage = this.messageService.getMessage();
  }
}
