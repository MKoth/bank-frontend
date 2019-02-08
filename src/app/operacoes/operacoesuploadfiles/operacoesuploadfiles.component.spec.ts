import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesUploadFilesComponent } from './operacoesuploadfiles.component';

describe('OperacoesUploadFilesComponent', () => {
  let component: OperacoesUploadFilesComponent;
  let fixture: ComponentFixture<OperacoesUploadFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesUploadFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesUploadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
