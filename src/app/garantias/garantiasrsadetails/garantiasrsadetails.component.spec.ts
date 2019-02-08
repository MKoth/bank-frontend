import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiasrsadetailsComponent } from './garantiasrsadetails.component';

describe('GarantiasrsadetailsComponent', () => {
  let component: GarantiasrsadetailsComponent;
  let fixture: ComponentFixture<GarantiasrsadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiasrsadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiasrsadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
