import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

  @Input() message: string;
  @Input() variableMessage: string;
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
