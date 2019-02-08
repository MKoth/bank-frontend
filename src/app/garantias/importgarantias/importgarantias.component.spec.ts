import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportgarantiasComponent } from './importgarantias.component';

describe('ImportgarantiasComponent', () => {
  let component: ImportgarantiasComponent;
  let fixture: ComponentFixture<ImportgarantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportgarantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportgarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
