import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludematriculaComponent } from './includematricula.component';

describe('IncludematriculaComponent', () => {
  let component: IncludematriculaComponent;
  let fixture: ComponentFixture<IncludematriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludematriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludematriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
