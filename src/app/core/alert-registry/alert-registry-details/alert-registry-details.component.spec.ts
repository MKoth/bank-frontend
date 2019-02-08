import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRegistryDetailsComponent } from './alert-registry-details.component';

describe('AlertRegistryDetailsComponent', () => {
  let component: AlertRegistryDetailsComponent;
  let fixture: ComponentFixture<AlertRegistryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertRegistryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertRegistryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
