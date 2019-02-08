import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesrsadetailsComponent } from './operacoesrsadetails.component';

describe('OperacoesrsadetailsComponent', () => {
  let component: OperacoesrsadetailsComponent;
  let fixture: ComponentFixture<OperacoesrsadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesrsadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesrsadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
