import { TestBed } from '@angular/core/testing';

import { DispatchersGuard } from './dispatchers.guard';

describe('DispatchersGuard', () => {
  let guard: DispatchersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DispatchersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
