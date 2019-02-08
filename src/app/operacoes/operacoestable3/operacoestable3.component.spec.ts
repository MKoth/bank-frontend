import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesTable3Component } from './operacoestable3.component';

describe('OperacoesTable3Component', () => {
  let component: OperacoesTable3Component;
  let fixture: ComponentFixture<OperacoesTable3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesTable3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesTable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
