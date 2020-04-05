import { TestBed } from '@angular/core/testing';

import { NovoService } from './novo.service';

describe('NovoService', () => {
  let service: NovoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
