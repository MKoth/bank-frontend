import { LazyLoadEvent } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { ExcelService } from './../../services/excel.service';
import { Component, OnInit,AfterViewChecked, AfterViewInit, ViewChild } from "@angular/core";
import { ClientsService } from "./../clients.service";
import { Client, Revision , modelStatus, Unit, ClientExport} from "./../../core/models";
import { ClienttableComponent } from "./../clienttable/clienttable.component";
import { SelectItem } from 'primeng/api';
import { SecurityService } from './../../security/security.service';
import { TextMaskModule } from 'angular2-text-mask';
import { UnitService } from './../../services/unit.service'
import { NgForm } from '@angular/forms';

interface Status {
  name: string;
  code: string;
}

export class ClientSearch {
  status:any;
  units:Unit[];
  cpfcnpj: string;
  page: number;
  name: string;
  resultsByPage:number;
}

@Component({
  selector: "app-clientsearch",
  templateUrl: "./clientsearch.component.html",
  styleUrls: ["./clientsearch.component.scss"]
})
export class ClientsearchComponent implements OnInit{
  id: number;
  statusModel =  modelStatus;
  selectedUnit: string =""
  selectedStatus: string = "";
  client = new ClientSearch();
  client2 = new ClientSearch();
  page:number =0;
  first:number=1;
  totalRecords: number;
  rowsNumber:number=10;
  loading:boolean=false;
  revisions: Revision[] = [];
  displayDialogg: boolean;
  unitWrite: Unit[];
  units:Unit[] = new Array();
  unitsList = new Array();
  tempUnits=[];
  //cpfMask:any="";
  onoff: boolean;
  noClient: boolean;
  unitsvector: any[] = [];
  @ViewChild('df') df:any;

  public cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/ ,/\d/, /\d/ ,/\d/, '-', /\d/, /\d/];
  mask(): any {
    return {
      mask: (value) => {
        let numlength = value.replace(/[^\d]+/g, '');
        if (numlength.length <= 11)
          return this.cpfMask;
        else
          return this.cnpjMask;
      },
      guide: true
    };
  }

  constructor(
    private excelService: ExcelService,
    private router: Router,
    private unitservice: UnitService,
    private clientService: ClientsService,
    private Sserv:SecurityService,
    private unitServ :UnitService) {
      this.unitWrite = this.Sserv.getUnitsWrite();
	    this.unitWrite.forEach(unit => {
      this.unitsList.push({label:unit.unitLabel,value:unit})
    })
  }
  liga(){
    this.displayDialogg=true;
    console.log(this.displayDialogg)
  }

  ngOnInit() {}

  changePage(event: LazyLoadEvent){
    this.page = Math.round(event.first/10);
    this.first = event.first+1;
    this.loadRevisions(this.page);
  }

loadRevisions(page) {
  this.loading = true;
  this.client2.status = this.selectedStatus;
  this.client2.page = page;
  this.client2.resultsByPage = this.rowsNumber;
  let dataModel = {
    'data': this.client2,
    'page': page,
    'resultsByPage':this.rowsNumber
  }
  this.unitsvector=[];
  this.df.rowIndex=0;
  this.clientService.getFilter(this.client2).then((data:any) => {
          this.revisions = data.revisions;
          this.totalRecords = data.numberOfRevisions;
          if(this.revisions.length>0){
            this.unitsvector = this.unitservice.unitsShow(this.revisions)
          }
          this.loading = false;
      },
      error => {
          this.loading = false;
      }
  );
}

  getCpf(event){
    this.cpfMask = event;
  }

  searching(form:NgForm) {
    this.client2 = Object.assign({},this.client);
    this.loadRevisions(this.page);
    // this.clientService.getFilter(name, this.cpfMask, temp, this.selectedStatus).then((data) => {
    //   this.revisions = <Revision[]>data;
    // });
  }

  resetForm(form:NgForm){
    form.reset()
  }

  exportAsXLSX(): void {
    let clientsExport: Array<ClientExport> = new Array<ClientExport>();
    let cList = <Array<Revision>>this.revisions;
    cList.forEach(e => {
      var cliente : ClientExport = {
        "ID":e.id,
        "Nome":e.client.name,
        "CPF_CNPJ":e.client.cpfcnpj,
        "Email":e.client.email,
        "Situação":e.status,
        "Telefone":e.client.phoneNumber,
        "Celular":e.client.cellPhone,
        "Agência":"",
        "Atenções":e.client.attentionsCounter,
        "Alertas":e.client.alertsCounter
      };
      clientsExport.push(cliente);
    });
    this.excelService.exportAsExcelFile(clientsExport, 'clientes');
 }

 getUser(id: number){
   this.router.navigate(["/cliente", id]);
 }

}
