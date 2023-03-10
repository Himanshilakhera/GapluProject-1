import { TestBed } from '@angular/core/testing';

import { GapluServiceService } from './gaplu-service.service';

describe('GapluServiceService', () => {
  let service: GapluServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GapluServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
