import { TestBed } from '@angular/core/testing';

import { LockService } from './lock.service';

describe('LockService', () => {
  let service: LockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LockService]
    });

    service = TestBed.get(LockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return true when isLocked is called', () => {
    const result = service.isLocked();
    expect(result).toBe(true);
  });

  it('Should return false when isLocked is called after unlock', () => {
    service.unlock();
    const result = service.isLocked();
    expect(result).toBe(false);
  });
});
