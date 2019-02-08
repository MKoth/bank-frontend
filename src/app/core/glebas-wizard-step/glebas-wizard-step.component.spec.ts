import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlebasWizardStepComponent } from './glebas-wizard-step.component';

describe('GlebasWizardStepComponent', () => {
  let component: GlebasWizardStepComponent;
  let fixture: ComponentFixture<GlebasWizardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlebasWizardStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlebasWizardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
