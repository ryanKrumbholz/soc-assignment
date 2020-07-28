import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceFieldComponent } from './experience-field.component';

describe('ExperienceFieldComponent', () => {
  let component: ExperienceFieldComponent;
  let fixture: ComponentFixture<ExperienceFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
