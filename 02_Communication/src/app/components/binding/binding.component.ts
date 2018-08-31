import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  oneWayMessage = 'something';
  twoWayMessage = 'something else';
  constructor() { }

  ngOnInit() { }

  setOneWay(oneWayInput: HTMLInputElement) {
    this.oneWayMessage = oneWayInput.value;
  }
}
