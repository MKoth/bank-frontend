import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'phone-mask',
  templateUrl: './phone-mask.component.html',
  styleUrls: ['./phone-mask.component.scss']
})
export class PhoneMaskComponent implements OnInit {
  @Input() telcel:any;
  @Output() telCelChange = new EventEmitter();
  @Input() name:any;
  @Input() disabled:any;

  public celMask = ['(',/\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public telMask = ['(',/\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  mask(): any {
    return {
      mask: (value) => {
        if (value.length <= 14)
          return this.telMask;
        else
          return this.celMask;
      },
      guide: true
    };
  }


  sendPhone(event){
    console.log('aqui');
    console.log(event.target.value);
    this.telCelChange.emit(event.target.value);

  }
  constructor() { }

  ngOnInit() {
  }

}
