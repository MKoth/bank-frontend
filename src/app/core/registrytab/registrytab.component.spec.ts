import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrytabComponent } from './registrytab.component';

describe('RegistrytabComponent', () => {
  let component: RegistrytabComponent;
  let fixture: ComponentFixture<RegistrytabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrytabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrytabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
