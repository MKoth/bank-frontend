import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuaranteeRelatedToRegistryComponent } from './create-guarantee-related-to-registry.component';

describe('CreateGuaranteeRelatedToRegistryComponent', () => {
  let component: CreateGuaranteeRelatedToRegistryComponent;
  let fixture: ComponentFixture<CreateGuaranteeRelatedToRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGuaranteeRelatedToRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuaranteeRelatedToRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
