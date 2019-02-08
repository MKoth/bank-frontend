import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytableComponent } from './operacoestable.component';

describe('PropertytableComponent', () => {
  let component: PropertytableComponent;
  let fixture: ComponentFixture<PropertytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
