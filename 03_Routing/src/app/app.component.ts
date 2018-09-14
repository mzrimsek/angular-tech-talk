import { Component } from '@angular/core';

import { LockService } from './services/lock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private lockService: LockService) { }

  unlock() {
    this.lockService.unlock();
  }
}
