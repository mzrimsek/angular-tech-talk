import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { LockService } from '../services/lock.service';

@Injectable()
export class LockGuard implements CanActivate {
  constructor(private lockService: LockService, private router: Router) { }

  canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const locked = this.lockService.isLocked();
    if (locked) {
      alert('Your kind isn\'t welcome here!');
      this.router.navigate(['unlocked']);
    }
    return !locked;
  }
}
