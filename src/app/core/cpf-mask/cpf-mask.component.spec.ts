import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfMaskComponent } from './cpf-mask.component';

describe('CpfMaskComponent', () => {
  let component: CpfMaskComponent;
  let fixture: ComponentFixture<CpfMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
