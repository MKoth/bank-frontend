import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesTable4Component } from './operacoestable4.component';

describe('OperacoesTable4Component', () => {
  let component: OperacoesTable4Component;
  let fixture: ComponentFixture<OperacoesTable4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesTable4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesTable4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
