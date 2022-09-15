import { TestBed } from '@angular/core/testing';

import { FetchjsonService } from './fetchjson.service';

describe('FetchjsonService', () => {
  let service: FetchjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
