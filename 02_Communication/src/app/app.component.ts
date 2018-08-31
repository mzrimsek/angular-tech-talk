import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Something from a variable - notice the brackets!';
  childCount: number;
  backgroundColor = '#ffffff';

  setChildCount(count: number) {
    this.childCount = count;
  }

  setBackgroundColor() {
    this.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
  }
}
