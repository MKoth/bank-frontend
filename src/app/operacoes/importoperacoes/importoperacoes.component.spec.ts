import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportoperacoesComponent } from './importoperacoes.component';

describe('ImportpropertyComponent', () => {
  let component: ImportoperacoesComponent;
  let fixture: ComponentFixture<ImportoperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportoperacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportoperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
