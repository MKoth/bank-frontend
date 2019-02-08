import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesTableAdjustableComponent } from './operacoestableadjustable.component';

describe('OperacoesTableAdjustableComponent', () => {
  let component: OperacoesTableAdjustableComponent;
  let fixture: ComponentFixture<OperacoesTableAdjustableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesTableAdjustableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesTableAdjustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
