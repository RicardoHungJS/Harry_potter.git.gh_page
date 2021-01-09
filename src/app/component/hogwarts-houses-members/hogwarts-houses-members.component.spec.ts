import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsHousesMembersComponent } from './hogwarts-houses-members.component';

describe('HogwartsHousesMembersComponent', () => {
  let component: HogwartsHousesMembersComponent;
  let fixture: ComponentFixture<HogwartsHousesMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogwartsHousesMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsHousesMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
