import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PropertiesService } from "../properties.service";
import { NgForm } from '@angular/forms';
import { Client, Revision, modelStatus, PropertyExport } from "./../../core/models";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message, LazyLoadEvent } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { UnitService } from "./../../services/unit.service";
import { ExcelService } from "./../../services/excel.service";


export class PropertySearch {
  car: string;
  complement: string;
  inclusionDate1: string;
  inclusionDate2: string;
  valuationStatusDate1: string;
  valuationStatusDate2: string;
  name: string;
  status: string;
  cpfcnpj: string;
  code: string;
  page:number;
  resultsByPage:number;
}

@Component({
  selector: 'app-propertysearch',
  templateUrl: './propertysearch.component.html',
  styleUrls: ['./propertysearch.component.scss']
})
export class PropertysearchComponent implements OnInit {
  searchForm:NgForm ;
  page:number =0;
  revisions: Revision[];
  totalRecords: number;
  statusModel = modelStatus;
  displayDialog: boolean;
  rowsNumber:number=10;
  property = new PropertySearch();
  property2 = new PropertySearch();

  @ViewChild('df') df:any;

  status2: any = modelStatus;
  selectedStatus: string = "";
  selectedValue: string = "inclusionDate";
  en: any;
  liga: boolean;
  // cpfMask:any;
  // onoff: boolean = true;


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
    private route: ActivatedRoute,
    private propertiesService: PropertiesService,
    private mserv: MessageService) {
  }

  // search() {
  //   this.pserv.getFilter(this.property).then((data) => {
  //     this.revisions = <Revision[]>data;
  //   });
  // }

  buscar(form: NgForm) {
    this.property2 = Object.assign({},this.property);
    this.loadRevisions(this.page);
  }

  loading: boolean;
  item: any;
  unitsvector = [];

  records = {}

  ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNamesMin: ["Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb.", "Dom."],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      clear: 'Clear'
    };
    // let form =new NgForm(null,null);
    // this.loadRevisions(form.value);
  }

  ngDoCheck() {
    if(this.revisions && this.revisions.length>0){
      this.unitsvector = this.unitservice.unitsShow(this.revisions)
    }
  }

  ligado() {
    this.liga = true;
  }

  getCpf(event){
    this.cpfMask = event;
  }

  showDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }
  exportAsXLSX(): void {
    let propertyExport: Array<PropertyExport> = new Array<PropertyExport>();
    let pList = <Array<Revision>>this.revisions;
    pList.forEach(e => {
      console.log(e);
      var property: PropertyExport = {
        "Codigo": e.property.code,
        "CPF_CNPJ": "",
        "Complemento": e.property.complement,
        "Area": e.property.area,
        "Ponto_Atendimento": e.units,
        "Data_Cadastro": e.property.createdAt,
        "CAR": e.property.car,
        "Situacao": e.status
      };
      propertyExport.push(property);
    });
    console.log(propertyExport);
    this.excelService.exportAsExcelFile(propertyExport, 'Imoveis');
  }

  resetForm(form:NgForm){
    form.reset();
    this.selectedValue = "inclusionDate";
  }

  goTo(id: number) {
    this.router.navigate(["/imovel", id]);
  }

  changePage(event: LazyLoadEvent){
    this.page = Math.round(event.first/10);
    this.loadRevisions(this.page);
  }

loadRevisions(page) {
  this.loading = true;
  this.property2.page=page;
  this.property2.resultsByPage=this.rowsNumber;
  let dataModel = {
    'data': this.property2,
    'page': page,
    'resultsByPage':this.rowsNumber
  }

  this.propertiesService.getFilter(this.property2).then((data:any) => {
          this.revisions = data.revisions;
          this.totalRecords = data.numberOfRevisions;
          this.loading = false;
      },
      error => {
          this.loading = false;
      }
  );
}

}
