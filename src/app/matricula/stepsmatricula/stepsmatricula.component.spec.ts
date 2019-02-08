import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsMatriculaComponent } from './stepsmatricula.component';

describe('StepsMatriculaComponent', () => {
  let component: StepsMatriculaComponent;
  let fixture: ComponentFixture<StepsMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
