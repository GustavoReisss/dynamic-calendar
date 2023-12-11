import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { demandaGuard } from './demanda.guard';

describe('demandaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => demandaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
