import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationsTabsComponent } from './relations-tabs.component';

describe('RelationsTabsComponent', () => {
  let component: RelationsTabsComponent;
  let fixture: ComponentFixture<RelationsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
