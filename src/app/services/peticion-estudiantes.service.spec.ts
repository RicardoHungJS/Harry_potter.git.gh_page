import { TestBed } from '@angular/core/testing';

import { PeticionEstudiantesService } from './peticion-estudiantes.service';

describe('PeticionEstudiantesService', () => {
  let service: PeticionEstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionEstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
