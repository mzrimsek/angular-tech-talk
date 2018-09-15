import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';

import { CountEvent } from '../../models';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectComponent implements OnInit {

  @Input() message: string;
  @Input() variableMessage: string;
  @Output() countChanged: EventEmitter<CountEvent> = new EventEmitter();
  @Output() buttonClicked: EventEmitter<null> = new EventEmitter();
  count = 0;
  constructor() { }

  ngOnInit() { }

  incrementCount() {
    this.count++;
    this.countChanged.emit({
      count: this.count
    });
  }

  emitButtonClicked() {
    this.buttonClicked.emit(null);
  }
}
