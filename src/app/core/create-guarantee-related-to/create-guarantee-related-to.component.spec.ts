import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuaranteeRelatedToComponent } from './create-guarantee-related-to.component';

describe('CreateGuaranteeRelatedToComponent', () => {
  let component: CreateGuaranteeRelatedToComponent;
  let fixture: ComponentFixture<CreateGuaranteeRelatedToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGuaranteeRelatedToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuaranteeRelatedToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
