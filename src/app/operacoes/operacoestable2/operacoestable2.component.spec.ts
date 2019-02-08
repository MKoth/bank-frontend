import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesTable2Component } from './operacoestable2.component';

describe('OperacoesTable2Component', () => {
  let component: OperacoesTable2Component;
  let fixture: ComponentFixture<OperacoesTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
