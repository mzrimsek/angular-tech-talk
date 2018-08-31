import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() message: string;
  @Input() message2: string;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  @Output() buttonClicked: EventEmitter<null> = new EventEmitter();
  count = 0;
  constructor() { }

  ngOnInit() { }

  incrementCount() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  emitButtonClicked() {
    this.buttonClicked.emit(null);
  }
}
