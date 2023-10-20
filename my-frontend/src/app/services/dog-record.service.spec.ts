import { TestBed } from '@angular/core/testing';

import { DogRecordService } from './dog-record.service';

describe('DogRecordService', () => {
  let service: DogRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
