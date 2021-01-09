import { TestBed } from '@angular/core/testing';

import { PeticionHousesMembersService } from './peticion-houses-members.service';

describe('PeticionHousesMembersService', () => {
  let service: PeticionHousesMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionHousesMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
