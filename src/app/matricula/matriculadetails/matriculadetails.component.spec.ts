import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculadetailsComponent } from './matriculadetails.component';

describe('PropertydetailsComponent', () => {
  let component: MatriculadetailsComponent;
  let fixture: ComponentFixture<MatriculadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
