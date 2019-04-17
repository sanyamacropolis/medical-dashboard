import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalApplicantComponent } from './final-applicant.component';

describe('FinalApplicantComponent', () => {
  let component: FinalApplicantComponent;
  let fixture: ComponentFixture<FinalApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
