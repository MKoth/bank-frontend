import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operacoestable2',
  templateUrl: './operacoestable2.component.html',
  styleUrls: ['./operacoestable2.component.scss']
})
export class OperacoesTable2Component implements OnInit {
  constructor() {}
  tablecontent1=[
    {class:"table-header", cols:[
      "Gleba",
      "Área sobreposta (ha)",
      "% Sobreposição"
    ]},
    {cols:[
      "Gleba1",
      "34.54",
      "31%"
    ]}
  ];
  tablecontent2=[
    {class:"table-header padding-bottom", cols:[
      {colspan:5, content:' '},
      {colspan:2, content:'ÁREA DO MUNICÍPIO', class:"separating-left-line-3-rows"}
    ]},
    {class:"table-header", cols:[
      "Município",
      "Estado",
      "CADMU",
      "UNICAD",
      "IBGE",
      "Em(ha)",
      "Percentual",
    ]},
    {cols:[
      "Jaboticabal",
      "SP",
      "0000",
      "0000",
      "0000",
      "464.876",
      "100%",
    ]}
  ];
  ngOnInit() {
    // this.propserv.getById(342);
  }
}