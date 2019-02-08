import { Component, OnInit, Input } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ExcelService } from "./../../services/excel.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-alerttable',
  template: `

    <p-table [value]="revisions" [paginator]="true" [rows]="10">
    <ng-template pTemplate="header">
      <tr>
        <th>Código</th>
        <th>CPF/CNPJ</th>
        <th>Complemento</th>
        <th>Data do Alerta</th>
        <th>Situação CAR</th>
        <th>Situação Risco Sobreposição</th>
        <th>Situação Distância risco</th>  
        <th>Situação</th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-revision>
      <tr (click)="getUser(revision.thing.id)" style="cursor: pointer">
        <td>{{revision.thing.id}}</td>
        <td>{{revision.client.name}}</td>
        <td>{{revision.client.cpfcnpj}}</td>
        <td>{{revision.client.email}}</td>
        <td>{{revision.status}}</td>
      </tr>
    </ng-template>
  </p-table>
  <div class="p-grid">
    <div class="p-col-12 p-md-2 p-md-offset-10">
      <button pButton type="button" label="Baixar XLSX" class="ui-button" (click)="exportAsXLSX()" #baixar></button>
    </div>
  </div>

  `,
  styles: []
})
export class AlerttableComponent implements OnInit {

  @Input() revisions: any;

  onoff: boolean = false;

  constructor(private excelService: ExcelService, private router: Router) { }

  exportAsXLSX(): void {
    let newClient : any
    this.excelService.exportAsExcelFile(this.revisions, 'clientes');
  } 

  ngOnInit() {
  }

}
