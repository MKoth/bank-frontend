import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuaranteeRelatedToClientComponent } from './create-guarantee-related-to-client.component';

describe('CreateGuaranteeRelatedToClientComponent', () => {
  let component: CreateGuaranteeRelatedToClientComponent;
  let fixture: ComponentFixture<CreateGuaranteeRelatedToClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGuaranteeRelatedToClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuaranteeRelatedToClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
