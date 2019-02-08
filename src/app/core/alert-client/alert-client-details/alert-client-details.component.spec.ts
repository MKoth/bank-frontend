import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertClientDetailsComponent } from './alert-client-details.component';

describe('AlertClientDetailsComponent', () => {
  let component: AlertClientDetailsComponent;
  let fixture: ComponentFixture<AlertClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
