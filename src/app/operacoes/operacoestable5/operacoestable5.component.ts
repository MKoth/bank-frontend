import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operacoestable5',
  templateUrl: './operacoestable5.component.html',
  styleUrls: ['./operacoestable5.component.scss']
})
export class OperacoesTable5Component implements OnInit {
  constructor() {}
  tablecontent5=[
    {class:"table-header", cols:[
      "Data",
      "Tipo",
      "Descricao",
      "Resticao",
      "Area de Intersecao",
      "% de Intersecao",
      "Critico",
      "Recebimente de demail",
      "Usario Verificator",
      "Data de verificacao"
    ]},
    {class:"bottom-line width-line", cols:[
      "31/08/18",
      "Poligono",
      "Area de Preservacao Permanente en Area de Vegetacao Nativa",
      "Area de Preservacao Permanente",
      "0.53",
      "100",
      "Nao",
      "Inibir email",
      " ",
      " "
    ]},
    {class:"bottom-line width-line", cols:[
      "30/08/18",
      "Poligono",
      "Area de Preservacao Permanente de Nascentes de olhos d'agua Perenes",
      "Area de Preservacao Permanente",
      "0.53",
      "100",
      "Nao",
      "Inibir email",
      " ",
      " "
    ]},
    {class:"width-line", cols:[
      "29/08/18",
      "Poligono",
      "Area de Preservacao Permanente de Rios ate 10 metros",
      "Area de Preservacao Permanente",
      "0.53",
      "100",
      "Nao",
      "Inibir email",
      " ",
      " "
    ]}
  ];
  ngOnInit() {
    // this.propserv.getById(342);
  }
}