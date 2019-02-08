import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitycardComponent } from './entitycard.component';

describe('EntitycardComponent', () => {
  let component: EntitycardComponent;
  let fixture: ComponentFixture<EntitycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
