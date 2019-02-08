import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoestaboneComponent } from './operacoestabone.component';

describe('OperacoestaboneComponent', () => {
  let component: OperacoestaboneComponent;
  let fixture: ComponentFixture<OperacoestaboneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoestaboneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoestaboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
