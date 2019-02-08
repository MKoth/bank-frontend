import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoessearchComponent } from './operacoessearch.component';

describe('OperacoessearchComponent', () => {
  let component: OperacoessearchComponent;
  let fixture: ComponentFixture<OperacoessearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoessearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoessearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
