import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropertyRelatedToComponent } from './create-property-related-to.component';

describe('CreatePropertyRelatedToComponent', () => {
  let component: CreatePropertyRelatedToComponent;
  let fixture: ComponentFixture<CreatePropertyRelatedToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePropertyRelatedToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropertyRelatedToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
