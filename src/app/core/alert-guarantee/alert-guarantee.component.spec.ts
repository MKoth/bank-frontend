import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertGuaranteeComponent } from './alert-guarantee.component';

describe('AlertGuaranteeComponent', () => {
  let component: AlertGuaranteeComponent;
  let fixture: ComponentFixture<AlertGuaranteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertGuaranteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
