import { ExcelService } from './../../services/excel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatriculaService } from "../matricula.service";
import { NgForm } from '@angular/forms';
import { Client, Revision } from "./../../core/models";
import { modelStatus, modelPropertyStatus ,RegistryExport} from './../../core/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message, LazyLoadEvent } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';


class Registrysearch {
  name: string;
  code: number;
  car:any;
  cpfcnpj: string;
  complement: string;
  status: string;
  inclusionDate1:string;
  inclusionDate2:string;
  valuationStatusDate1:string;
  valuationStatusDate2:string;
  page:number;
  resultsByPage;
}

@Component({
  selector: 'app-matriculasearch',
  templateUrl: './matriculasearch.component.html',
  styleUrls: ['./matriculasearch.component.scss']
})
export class MatriculasearchComponent implements OnInit {
  revisionLoaded: Promise<boolean>;
  statusModel = modelPropertyStatus;
  displayDialog: boolean;
  onoff: boolean;
  registryform:Registrysearch = new Registrysearch();
  registryform2:Registrysearch = new Registrysearch();
  loading: boolean=false;
  page:number;
  totalRecords:number;
  rowsNumber:number=10;
  revisions: Revision[]=[];
  status: any = modelStatus;
  selectedStatus: string = "";
  selectedValue: string = "inclusionDate";
  en: any;
  liga: boolean;
  //cpfMask:any;

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
    private route: ActivatedRoute,
    private excelService: ExcelService,
    private router: Router,
    private matriculaService: MatriculaService) {

  }

  buscar(form: NgForm) {
    // form.value.cpfcnpj = this.cpfMask;
    // this.maserv.getFilter(form.value).then((data) => {
    //   this.revisions = <Revision[]>data;
    //   this.revisionLoaded = Promise.resolve(true);
    // });
    this.registryform2 = Object.assign({},this.registryform);
    this.loadRevisions(this.page);
  }

  records = {}
  ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNamesMin: ["Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb.", "Dom."],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      clear: 'Clear'
    };
  }

  ligado() {
    this.liga = true;
  }

  showDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }

  getCpf(event){
    this.cpfMask = event;
  }

  resetForm(form:NgForm){
    form.reset();
    this.selectedValue = "inclusionDate";
  }

  ngDoCheck() {
    if(this.revisions.length > 0 && this.onoff == true){
      this.onoff = false;
    }
  }

  changePage(event: LazyLoadEvent){
    this.page = Math.round(event.first/10);
    this.loadRevisions(this.page);
  }

loadRevisions(page) {
  this.loading = true;
  this.registryform2.page=page;
  this.registryform2.resultsByPage=this.rowsNumber;
  let dataModel = {
    'data': this.registryform2,
    'page': page,
    'resultsByPage':this.rowsNumber
  }

  this.matriculaService.getFilter(this.registryform2).then((data:any) => {
          this.revisions = data.revisions;
          this.totalRecords = data.numberOfRevisions;
          this.loading = false;
          this.revisionLoaded = Promise.resolve(true);
      },
      error => {
          this.loading = false;
      }
  );
}
exportAsXLSX(): void {
  let registryExport: Array<RegistryExport> = new Array<RegistryExport>();
  let cList = <Array<Revision>>this.revisions;
  cList.forEach(e => {
    var registry : RegistryExport = {
      "Codigo": e.registry.id,
      "Estado": e.registry.uf,
      "Area": e.registry.area,
      "Situacao": e.status
    };
    registryExport.push(registry);
  });
  this.excelService.exportAsExcelFile(registryExport, 'Matriculas');
}

getMatricula(id: number) {
  this.router.navigate(["/matricula", id]);
}

}
