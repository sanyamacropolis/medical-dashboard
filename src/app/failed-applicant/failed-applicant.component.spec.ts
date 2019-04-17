import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedApplicantComponent } from './failed-applicant.component';

describe('FailedApplicantComponent', () => {
  let component: FailedApplicantComponent;
  let fixture: ComponentFixture<FailedApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
