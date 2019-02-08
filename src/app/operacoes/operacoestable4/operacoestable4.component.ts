import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operacoestable4',
  templateUrl: './operacoestable4.component.html',
  styleUrls: ['./operacoestable4.component.scss']
})
export class OperacoesTable4Component implements OnInit {
  constructor() {}
  tablecontent=[
    {class:"table-header header-underlined", cols:[
      "Titulo",
      "Resultados",
      {class:"center", content:"Conclusoes"}
    ]},
    {cols:[
      "Area etiteva (ha)",
      "3154.39",
      {class:"mark", content:"✔"}
    ]},
    {cols:[
      "Localizacao",
      "Jaboticabal - SP/100%",
      {class:"mark", content:"✔"}
    ]},
    {cols:[
      "Cultura identificada",
      "Procedente",
      {class:"mark", content:"✔"}
    ]},
    {cols:[
      "Estagio atingido",
      "Maturasao",
      {class:"mark", content:"✔"}
    ]},
    {cols:[
      "Obcervacoes",
      "-",
      {class:"mark", content:" "}
    ]},
    {cols:[
      "Abequacao ao ZARC",
      "NA",
      {class:"mark", content:"✔"}
    ]},
    {cols:[
      "Expectativa de Producao",
      "80-100%",
      {class:"mark", content:"✔"}
    ]},
    {cols:[
      "Expectativa de Produtividate",
      "80-100%",
      {class:"mark", content:"✔"}
    ]}
  ];
  data = [{
    "name": "Glebas",
    "series": [
      {
        "value": 1000,
        "name": "JAN/18"
      },
      {
        "value": 900,
        "name": "FEV/18"
      },
      {
        "value": 850,
        "name": "MAR/18"
      },
      {
        "value": 810,
        "name": "ABR/18"
      },
      {
        "value": 750,
        "name": "MAY/18"
      }
    ]
  }]
  lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: '#fff'
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: true,
          borderColor: '#ddd',
      }
    ]
  };
  customColors = [
    { 
      name: 'Glebas',
      value: '#00fffffb'
    }
  ];
  ngOnInit() {
    // this.propserv.getById(342);
  }
}