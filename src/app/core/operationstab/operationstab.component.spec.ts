import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationstabComponent } from './operationstab.component';

describe('OperationstabComponent', () => {
  let component: OperationstabComponent;
  let fixture: ComponentFixture<OperationstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
