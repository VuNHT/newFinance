import { TestBed } from '@angular/core/testing';

import { ServiceAllService } from './service-all.service';

describe('ServiceAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAllService = TestBed.get(ServiceAllService);
    expect(service).toBeTruthy();
  });
});
