import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesTable1Component } from './operacoestable1.component';

describe('OperacoesTable1Component', () => {
  let component: OperacoesTable1Component;
  let fixture: ComponentFixture<OperacoesTable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesTable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
