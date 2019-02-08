import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsaDetailsComponent } from './rsaDetails.component';

describe('RsaDetailsComponent', () => {
  let component: RsaDetailsComponent;
  let fixture: ComponentFixture<RsaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
