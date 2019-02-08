import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertsearch',
  template: `
  <p-card header="Buscar Alerta">
    <div class="p-grid">

      <div class="p-col-12 p-md-4">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-user"></i></span>
          <span class="ui-float-label">
            <input type="text" pInputText placeholder="" #name>
            <label for="float-input">Insira o código</label>
          </span>
        </div>
      </div>

    <div class="p-col-12 p-md-4">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-user"></i></span>
          <span class="ui-float-label">
            <input type="text" pInputText placeholder="" #name>
            <label for="float-input">Insira o CPF/CNPJ</label>
          </span>
        </div>
      </div>

    <div class="p-grid">
      <div class="p-col-12 p-md-4">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-user"></i></span>
          <span class="ui-float-label">
            <input type="text" pInputText placeholder="" #name>
            <label for="float-input">insira o Complemento</label>
          </span>
        </div>
      </div>
      </div>
      </div>

      <div class='p-grid'>

        <div class="p-col-6 p-md-2">
          <div class="ui-inputgroup">
            <span class="ui-inputgroup-addon"><i class="fa fa-user"></i></span>
            <span class="ui-float-label">
              <input type="text" pInputText placeholder="" #name>
              <label for="float-input">De: DD/MM/AA</label>
            </span>
          </div>
        </div>

        <div class="p-col-6 p-md-2">
          <div class="ui-inputgroup">
            <span class="ui-inputgroup-addon"><i class="fa fa-user"></i></span>
            <span class="ui-float-label">
              <input type="text" pInputText placeholder="" #name>
              <label for="float-input">Até: DD/MM/AA</label>
            </span>
          </div>
        </div>
    
        <div class="p-col-12 p-md-4">
          <div class="ui-inputgroup">
              <p-multiSelect [options]="cities1" [(ngModel)]="selectedCities1" defaultLabel="Selecione" 
                  [panelStyle]="{minWidth:'16.4em'}" [style]="{minWidth:'16.4em'}">
              </p-multiSelect>
          </div>
        </div>
        </div>


        <p-footer>
          <div class="p-grid">
            <div class="p-col-12 p-mg-6 p-offset-8">
              <button pButton type="button" label="Buscar" (click)="showTab()" class="ui-button"></button>
            </div>
          </div>

          <div *ngIf="onoff">
            <app-alerttable></app-alerttable>
          </div>
        </p-footer>
       
</p-card>
  `,
  styles: []
})
export class AlertsearchComponent implements OnInit {

  constructor() { }

  onoff: boolean = false;

  showTab() {
    this.onoff = true;
    // console.log(this.onoff)
  }

  ngOnInit() {
  }

}
