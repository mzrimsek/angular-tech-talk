import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  now = new Date();
  private hidden = false;
  companies = ['RoviSys'];

  getHidden() {
    return this.hidden;
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }

  updateTime() {
    this.now = new Date();
  }
}
