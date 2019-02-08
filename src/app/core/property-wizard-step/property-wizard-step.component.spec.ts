import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyWizardStepComponent } from './property-wizard-step.component';

describe('PropertyWizardStepComponent', () => {
  let component: PropertyWizardStepComponent;
  let fixture: ComponentFixture<PropertyWizardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyWizardStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyWizardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
