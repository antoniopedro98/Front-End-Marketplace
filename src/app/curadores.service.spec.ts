import { TestBed } from '@angular/core/testing';

import { CuradoresService } from './curadores.service';

describe('CuradoresService', () => {
  let service: CuradoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuradoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
