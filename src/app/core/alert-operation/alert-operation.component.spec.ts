import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOperationComponent } from './alert-operation.component';

describe('AlertOperationComponent', () => {
  let component: AlertOperationComponent;
  let fixture: ComponentFixture<AlertOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
