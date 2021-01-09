import { TestBed } from '@angular/core/testing';

import { PeticionTeachersService } from './peticion-teachers.service';

describe('PeticionTeachersService', () => {
  let service: PeticionTeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionTeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
