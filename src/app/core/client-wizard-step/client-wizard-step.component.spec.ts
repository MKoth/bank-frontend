import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWizardStepComponent } from './client-wizard-step.component';

describe('ClientWizardStepComponent', () => {
  let component: ClientWizardStepComponent;
  let fixture: ComponentFixture<ClientWizardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientWizardStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWizardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
