import { Component, NgModule, OnInit, Input, Output, EventEmitter, Provider, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

export const CPFMASK_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CpfMaskComponent),
  multi: true
}

@Component({
  selector: 'cpf-mask',
  templateUrl: './cpf-mask.component.html',
  styleUrls: ['./cpf-mask.component.scss'],
  providers: [CPFMASK_VALUE_ACCESSOR]
})
export class CpfMaskComponent implements ControlValueAccessor, OnInit {
  @Input() cpfcnpj:string;
  @Output() cpfcnpjChange = new EventEmitter();
  @Input() name:any;
  @Input() disabled:boolean;

  value: any;
  onModelChange: Function = () => {};
  onModelTouched: Function = () => {};

  // @Input()
  // get cpfcnpj(){
  //   return this.cpfcnpj;
  // }

  // set cpfcnpj(val) {
  //   this.cpfcnpj = val;
  //   this.cpfcnpjChange.emit(this.cpfcnpjValue);
  // }

  public cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/ ,/\d/, /\d/ ,/\d/, '-', /\d/, /\d/];
  mask(): any {
    return {
      mask: (value) => {
        let numlength = value.replace(/[^\d]+/g, '');
        if (numlength.length <= 11)
          return this.cpfMask;
        else
          return this.cnpjMask;
      },
      guide: true
    };
  }
  sendCpf(event){
    this.cpfcnpjChange.emit(event.target.value);
  }

  constructor() { }

  ngOnInit() {
  }
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

}

@NgModule({
  declarations: [CpfMaskComponent],
  exports: [CpfMaskComponent]
})
export class CpfMaskModule {}
