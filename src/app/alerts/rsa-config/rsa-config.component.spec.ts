import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsaConfigComponent } from './rsa-config.component';

describe('RsaConfigComponent', () => {
  let component: RsaConfigComponent;
  let fixture: ComponentFixture<RsaConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsaConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
