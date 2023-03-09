import { TestBed } from '@angular/core/testing';

import { UserauGuard } from './userau.guard';

describe('UserauGuard', () => {
  let guard: UserauGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserauGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
