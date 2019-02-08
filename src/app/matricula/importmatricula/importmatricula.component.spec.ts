import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportmatriculaComponent } from './importmatricula.component';

describe('ImportpropertyComponent', () => {
  let component: ImportmatriculaComponent;
  let fixture: ComponentFixture<ImportmatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportmatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportmatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
