import { async, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LockService } from '../services/lock.service';

import { LockGuard } from './lock.guard';

describe('LockGuard', () => {
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LockGuard,
        LockService,
        { provide: Router, useValue: router }
      ]
    });
  });

  it('should ...', inject([LockGuard], (guard: LockGuard) => {
    expect(guard).toBeTruthy();
  }));
});
