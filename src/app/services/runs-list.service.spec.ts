import { TestBed } from '@angular/core/testing';

import { RunsListService } from './runs-list.service';

describe('RunsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RunsListService = TestBed.get(RunsListService);
    expect(service).toBeTruthy();
  });
});
