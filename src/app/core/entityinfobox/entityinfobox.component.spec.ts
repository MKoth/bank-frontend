import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityinfoboxComponent } from './entityinfobox.component';

describe('EntityinfoboxComponent', () => {
  let component: EntityinfoboxComponent;
  let fixture: ComponentFixture<EntityinfoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityinfoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityinfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
