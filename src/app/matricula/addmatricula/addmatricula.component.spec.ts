import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatriculaComponent } from './addmatricula.component';

describe('AddmatriculaComponent', () => {
  let component: AddmatriculaComponent;
  let fixture: ComponentFixture<AddmatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
