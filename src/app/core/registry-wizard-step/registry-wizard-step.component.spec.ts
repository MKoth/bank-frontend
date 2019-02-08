import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryWizardStepComponent } from './registry-wizard-step.component';

describe('RegistryWizardStepComponent', () => {
  let component: RegistryWizardStepComponent;
  let fixture: ComponentFixture<RegistryWizardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryWizardStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryWizardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
