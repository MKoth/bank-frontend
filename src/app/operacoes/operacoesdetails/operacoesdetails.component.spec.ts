import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesdetailsComponent } from './operacoesdetails.component';

describe('PropertydetailsComponent', () => {
  let component: OperacoesdetailsComponent;
  let fixture: ComponentFixture<OperacoesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
