import { TestBed } from '@angular/core/testing';

import { SimsHttpCoreService } from './sims-http-core.service';

describe('SimsHttpCoreService', () => {
  let service: SimsHttpCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimsHttpCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
