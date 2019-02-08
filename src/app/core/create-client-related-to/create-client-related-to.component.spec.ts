import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientRelatedToComponent } from './create-client-related-to.component';

describe('CreateClientRelatedToComponent', () => {
  let component: CreateClientRelatedToComponent;
  let fixture: ComponentFixture<CreateClientRelatedToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClientRelatedToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClientRelatedToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
