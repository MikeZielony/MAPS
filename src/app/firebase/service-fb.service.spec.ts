import { TestBed } from '@angular/core/testing';

import { ServiceFbService } from './service-fb.service';

describe('ServiceFbService', () => {
  let service: ServiceFbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
