import { TestBed } from '@angular/core/testing';

import { ApiNetService } from './api.net.service';

describe('ApiNetService', () => {
  let service: ApiNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
