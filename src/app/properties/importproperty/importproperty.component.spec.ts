import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpropertyComponent } from './importproperty.component';

describe('ImportpropertyComponent', () => {
  let component: ImportpropertyComponent;
  let fixture: ComponentFixture<ImportpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
