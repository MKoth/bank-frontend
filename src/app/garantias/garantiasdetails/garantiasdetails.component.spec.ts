import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiasdetailsComponent } from './garantiasdetails.component';

describe('GarantiasdetailsComponent', () => {
  let component: GarantiasdetailsComponent;
  let fixture: ComponentFixture<GarantiasdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiasdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
