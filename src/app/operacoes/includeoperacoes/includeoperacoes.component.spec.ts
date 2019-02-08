import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeoperacoesComponent } from './includeoperacoes.component';

describe('IncludeoperacoesComponent', () => {
  let component: IncludeoperacoesComponent;
  let fixture: ComponentFixture<IncludeoperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludeoperacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeoperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
