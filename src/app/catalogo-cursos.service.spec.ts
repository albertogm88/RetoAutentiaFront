import { TestBed } from '@angular/core/testing';

import { CatalogoCursosService } from './catalogo-cursos.service';

describe('CatalogoCursosService', () => {
  let service: CatalogoCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
