import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeWizardEmbedComponent } from './guarantee-wizard-embed.component';

describe('GuaranteeWizardEmbedComponent', () => {
  let component: GuaranteeWizardEmbedComponent;
  let fixture: ComponentFixture<GuaranteeWizardEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaranteeWizardEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeWizardEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
