import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuaranteeRelatedToPropertyComponent } from './create-guarantee-related-to-property.component';

describe('CreateGuaranteeRelatedToPropertyComponent', () => {
  let component: CreateGuaranteeRelatedToPropertyComponent;
  let fixture: ComponentFixture<CreateGuaranteeRelatedToPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGuaranteeRelatedToPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuaranteeRelatedToPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
