import { TestBed } from '@angular/core/testing';

import { PerfilCuradorService } from './perfil-curador.service';

describe('PerfilCuradorService', () => {
  let service: PerfilCuradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilCuradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
