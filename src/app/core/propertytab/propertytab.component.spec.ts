import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytabComponent } from './propertytab.component';

describe('PropertytabComponent', () => {
  let component: PropertytabComponent;
  let fixture: ComponentFixture<PropertytabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertytabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertytabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
