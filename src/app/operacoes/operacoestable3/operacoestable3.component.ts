import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operacoestable3',
  templateUrl: './operacoestable3.component.html',
  styleUrls: ['./operacoestable3.component.scss']
})
export class OperacoesTable3Component implements OnInit {
  constructor() {}
  tablecontent3=[
    {class:"table-header", cols:[
      "Produtor",
      "Área financiada (ha):",
      "Minicípios do empreendimento:",
      "Cultura financiada",
      "Zarc da cultura"
    ]},
    {cols:[
      "Name de produdor",
      "31,5000",
      "Jaboticabal - SP",
      "Cana de Acucar",
      "NA"
    ]},
    {class:"table-header ", cols:[
      "Data programada para plantio:",
      "Data programada para colheita",
      "Refbacen de operacao",
      "Produtividade esperada (kg/ha)"
    ]},
    {cols:[
      "01/07/2016",
      "02/12/2017",
      "2017000000000",
      "90.000.000"
    ]}
  ];
  ngOnInit() {
    // this.propserv.getById(342);
  }
}