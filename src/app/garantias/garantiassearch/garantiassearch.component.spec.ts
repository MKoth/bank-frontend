import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiassearchComponent } from './garantiassearch.component';

describe('GarantiassearchComponent', () => {
  let component: GarantiassearchComponent;
  let fixture: ComponentFixture<GarantiassearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiassearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiassearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
