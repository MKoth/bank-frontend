import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculataboneComponent } from './marticulatabone.component';

describe('MatriculataboneComponent', () => {
  let component: MatriculataboneComponent;
  let fixture: ComponentFixture<MatriculataboneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculataboneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculataboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
