import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiastaboneComponent } from './garantiastabone.component';

describe('GarantiastaboneComponent', () => {
  let component: GarantiastaboneComponent;
  let fixture: ComponentFixture<GarantiastaboneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiastaboneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiastaboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
