import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoperacoesComponent } from './addoperacoes.component';

describe('AddoperacoesComponent', () => {
  let component: AddoperacoesComponent;
  let fixture: ComponentFixture<AddoperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoperacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
