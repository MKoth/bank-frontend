import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOperationRelatedToComponent } from './create-operation-related-to.component';

describe('CreateOperationRelatedToComponent', () => {
  let component: CreateOperationRelatedToComponent;
  let fixture: ComponentFixture<CreateOperationRelatedToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOperationRelatedToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOperationRelatedToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
