import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludegarantiasComponent } from './includegarantias.component';

describe('IncludegarantiasComponent', () => {
  let component: IncludegarantiasComponent;
  let fixture: ComponentFixture<IncludegarantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludegarantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludegarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
