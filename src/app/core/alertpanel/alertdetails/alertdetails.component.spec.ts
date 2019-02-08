import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertdetailsComponent } from './alertdetails.component';

describe('AlertdetailsComponent', () => {
  let component: AlertdetailsComponent;
  let fixture: ComponentFixture<AlertdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
