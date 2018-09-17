import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { LockService } from '../services/lock.service';

import { LockGuard } from './lock.guard';

describe('LockGuard', () => {
  let guard: LockGuard;
  let service: LockService;
  let routerStateSnapshot: RouterStateSnapshot;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LockGuard,
        LockService,
        { provide: Router, useValue: router },
        { provide: RouterStateSnapshot, useClass: MockRouterStateSnapshot }
      ]
    });

    guard = TestBed.get(LockGuard);
    service = TestBed.get(LockService);
    routerStateSnapshot = TestBed.get(RouterStateSnapshot);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('When route is locked', () => {
    it('Should return false', () => {
      const result = guard.canActivate(new ActivatedRouteSnapshot(), routerStateSnapshot);
      expect(result).toBe(false);
    });

    it('Should navigate to unlocked', () => {
      guard.canActivate(new ActivatedRouteSnapshot(), routerStateSnapshot);
      expect(router.navigate).toHaveBeenCalledWith(['unlocked']);
    });

    it('Should display an alert message', () => {
      spyOn(window, 'alert');
      guard.canActivate(new ActivatedRouteSnapshot(), routerStateSnapshot);
      expect(window.alert).toHaveBeenCalledWith('Your kind isn\'t welcome here!');
    });
  });

  it('Should return true when route is unlocked', () => {
    service.unlock();
    const result = guard.canActivate(new ActivatedRouteSnapshot(), routerStateSnapshot);
    expect(result).toBe(true);
  });
});

export class MockRouterStateSnapshot {
  url = 'app';
}
