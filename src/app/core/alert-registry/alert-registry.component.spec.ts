import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRegistryComponent } from './alert-registry.component';

describe('AlertRegistryComponent', () => {
  let component: AlertRegistryComponent;
  let fixture: ComponentFixture<AlertRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
