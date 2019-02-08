import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasearchComponent } from './matriculasearch.component';

describe('MatriculasearchComponent', () => {
  let component: MatriculasearchComponent;
  let fixture: ComponentFixture<MatriculasearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculasearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculasearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
