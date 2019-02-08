import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operacoestable1',
  templateUrl: './operacoestable1.component.html',
  styleUrls: ['./operacoestable1.component.scss']
})
export class OperacoesTable1Component implements OnInit {
  constructor() {}
  tablecontent=[
    {class:"table-header", cols:[
      "Área Total (ha)",
      "Área Total in liquida (ha)",
      "Área Total Cultivada (ha)",
      "Área Total Sobreposta (ha)",
      "Variação"
    ]},
    {cols:[
      "90345",
      "34.54",
      "2454.3",
      "000.00"
    ]}
  ];
  ngOnInit() {
    console.log(this.tablecontent);
    // this.propserv.getById(342);
  }
}