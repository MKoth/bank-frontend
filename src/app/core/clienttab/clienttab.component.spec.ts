import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienttabComponent } from './clienttab.component';

describe('ClienttabComponent', () => {
  let component: ClienttabComponent;
  let fixture: ComponentFixture<ClienttabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienttabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
