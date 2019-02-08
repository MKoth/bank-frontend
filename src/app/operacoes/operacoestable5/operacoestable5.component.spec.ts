import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesTable5Component } from './operacoestable5.component';

describe('OperacoesTable5Component', () => {
  let component: OperacoesTable5Component;
  let fixture: ComponentFixture<OperacoesTable5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesTable5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesTable5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
