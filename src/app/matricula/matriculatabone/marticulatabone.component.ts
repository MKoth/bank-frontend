import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriculatabone',
  templateUrl: './matriculatabone.component.html',
  styleUrls: ['./matriculatabone.component.scss']
})
export class MatriculataboneComponent implements OnInit {

  constructor() { }

properties = 
    {nr: 'MT - xxxx.xxx.xxxxx.xxx.xxxx',
    sc: 'Ativo',
    srl: 'Não analisada',
    ai: '11.700(ha)',
    rlc: '7.488(ha)',
    rla: '0',
    aA: '468(ha)',
    sar: 'Embargo',
    par: '800m'
  };

headers = {
  nr: 'Número de registro',
  sc: 'Situação do cadastro',
  srl: 'Situação reserva legal',
  ai: 'Área do imóvel',
  rlc: 'Reserva legal declarada',
  rla: 'Reserva legal averbada',
  aA:'Área de APP',
  sar: 'Sobreposição área de risco',
  par: 'Proximidade área de risco'
};


  ngOnInit() {
  }

}
