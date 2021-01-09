import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsTeachersComponent } from './hogwarts-teachers.component';

describe('HogwartsTeachersComponent', () => {
  let component: HogwartsTeachersComponent;
  let fixture: ComponentFixture<HogwartsTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogwartsTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
