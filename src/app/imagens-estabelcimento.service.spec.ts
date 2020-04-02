import { TestBed } from '@angular/core/testing';

import { ImagensEstabelcimentoService } from './imagens-estabelcimento.service';

describe('ImagensEstabelcimentoService', () => {
  let service: ImagensEstabelcimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagensEstabelcimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
