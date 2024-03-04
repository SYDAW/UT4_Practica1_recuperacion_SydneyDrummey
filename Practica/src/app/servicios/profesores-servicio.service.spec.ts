import { TestBed } from '@angular/core/testing';

import { ProfesoresServicioService } from './profesores-servicio.service';

describe('ProfesoresServicioService', () => {
  let service: ProfesoresServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesoresServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
