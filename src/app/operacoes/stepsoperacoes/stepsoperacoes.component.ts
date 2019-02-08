import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-stepsoperacoes',
  templateUrl: './stepsoperacoes.component.html',
  styleUrls: ['./stepsoperacoes.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class StepsOperacoesComponent implements OnInit {

  
  activeIndex: number;
  items: MenuItem[];

  constructor(private messageService: MessageService) { }



    
  ngOnInit() {
    this.items = [{
      // addproperty router link 
      label: 'Informação do Imóvel',icon: 'fa fa-fw fa-home',routerLink: ['/incluirimovel'],queryParams: {'recent': 'true'},
      command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({severity:'info', summary:'Inclua as informações do imóvel', detail: event.item.label});
      }
  },
  {
      label: 'Mapa',routerLink: ['/mapaimovel'],queryParams: {'recent': 'true'},
      //mapa router link
      command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({severity:'info', summary:'Crie o mapa', detail: event.item.label});
      }
  },
  {
      label: 'Relacionar Cliente',routerLink: ['/relacionarimovel'],queryParams: {'recent': 'true'},
      //save and continue router link 
      command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({severity:'info', summary:'Relacione o cliente', detail: event.item.label});
      }
  },
  {
      label: 'Incluir Matrículas',routerLink: ['/operacoesimovel'],queryParams: {'recent': 'true'},
      // addpropertyinregistry router link 
      command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({severity:'info', summary:'Relacione a matrícula', detail: event.item.label});
      }
 }
];
  }
}