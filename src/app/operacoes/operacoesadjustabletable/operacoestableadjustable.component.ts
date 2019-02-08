import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operacoestableadjustable',
  templateUrl: './operacoestableadjustable.component.html',
  styleUrls: ['./operacoestableadjustable.component.scss']
})
export class OperacoesTableAdjustableComponent implements OnInit {
  @Input() tablecontent: Array<Object>;

  
  constructor() {}

  ngOnInit() {
  }
}