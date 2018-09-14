import { Injectable } from '@angular/core';

@Injectable()
export class LockService {

  private locked = true;
  constructor() { }

  unlock() {
    this.locked = false;
  }

  isLocked(): boolean {
    return this.locked;
  }
}
