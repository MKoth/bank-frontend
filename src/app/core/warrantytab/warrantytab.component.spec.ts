import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantytabComponent } from './warrantytab.component';

describe('WarrantytabComponent', () => {
  let component: WarrantytabComponent;
  let fixture: ComponentFixture<WarrantytabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantytabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantytabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
