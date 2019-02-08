import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricularsadetailsComponent } from './matricularsadetails.component';

describe('MatricularsadetailsComponent', () => {
  let component: MatricularsadetailsComponent;
  let fixture: ComponentFixture<MatricularsadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricularsadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricularsadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
