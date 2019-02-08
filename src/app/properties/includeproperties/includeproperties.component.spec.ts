import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludepropertiesComponent } from './includeproperties.component';

describe('IncludepropertiesComponent', () => {
  let component: IncludepropertiesComponent;
  let fixture: ComponentFixture<IncludepropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludepropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludepropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
