import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsStudentsComponent } from './hogwarts-students.component';

describe('HogwartsStudentsComponent', () => {
  let component: HogwartsStudentsComponent;
  let fixture: ComponentFixture<HogwartsStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogwartsStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
