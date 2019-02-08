import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationWizardStepComponent } from './operations-wizard-step.component';

describe('OperationWizardStepComponent', () => {
  let component: OperationWizardStepComponent;
  let fixture: ComponentFixture<OperationWizardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationWizardStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationWizardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
