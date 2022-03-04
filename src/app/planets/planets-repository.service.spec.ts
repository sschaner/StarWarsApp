import { TestBed } from '@angular/core/testing';

import { PlanetsRepositoryService } from './planets-repository.service';

describe('PlanetsRepositoryService', () => {
  let service: PlanetsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
