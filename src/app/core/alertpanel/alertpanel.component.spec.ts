import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertpanelComponent } from './alertpanel.component';

describe('AlertpanelComponent', () => {
  let component: AlertpanelComponent;
  let fixture: ComponentFixture<AlertpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
