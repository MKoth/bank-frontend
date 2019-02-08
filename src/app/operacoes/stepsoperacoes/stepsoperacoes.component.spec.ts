import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsOperacoesComponent } from './stepsoperacoes.component';

describe('StepsOperacoesComponent', () => {
  let component: StepsOperacoesComponent;
  let fixture: ComponentFixture<StepsOperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsOperacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
