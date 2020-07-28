import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentFieldComponent } from './employment-field.component';

describe('EmploymentFieldComponent', () => {
  let component: EmploymentFieldComponent;
  let fixture: ComponentFixture<EmploymentFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
