import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {GarantiasService} from "./../garantias.service";
import { NgForm } from '@angular/forms';
import { Client, Revision, modelFiscalizationStatus } from "./../../core/models";
import { modelStatus, modelTypeGuarantee, modelPropertyStatus, GuaranteeExport } from './../../core/models';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Message, LazyLoadEvent } from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { ExcelService } from "./../../services/excel.service";

export class GuaranteeSearch {
  status: any;
  car: string;
  complement: string;
  timeSpanInitial: string;
  timeSpanFinal: string;
  guaranteeName: string;
  status2: string;
  key: string;
  operationCode:string;
  value1:number;
  value2:number;
  page:number;
  resultsByPage:number;
}

@Component({
  selector: 'app-garantiassearch',
  templateUrl: './garantiassearch.component.html',
  styleUrls: ['./garantiassearch.component.scss']
})
export class GarantiassearchComponent implements OnInit {

  loading: boolean=false;
  page:number;
  totalRecords:number;
  rowsNumber:number=10;
  statusModel = modelPropertyStatus;
  fiscalizationStatus = modelFiscalizationStatus;
  guaranteeType = modelTypeGuarantee;
  displayDialog: boolean;
  guarantee = new GuaranteeSearch();
  guarantee2 = new GuaranteeSearch();
  revisions: Revision[];
  status:any =  modelStatus;
  selectedStatus: string = "";
  selectedValue: string = "inclusionDate";
  en: any;
  liga: boolean;


  constructor(
    private route: ActivatedRoute,
    private garantiaService: GarantiasService,
    private excelService: ExcelService, 
    private router: Router,
    ) {}

  buscar(form:NgForm) {
    this.guarantee2 = Object.assign({},this.guarantee);
    this.loadRevisions(this.page);
  }

  records = {}
  ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNamesMin: ["Seg.","Ter.","Qua.","Qui.","Sex.","Sáb.","Dom."],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
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

  resetForm(form:NgForm){
    form.reset()
  }

  changePage(event: LazyLoadEvent){
    this.page = Math.round(event.first/10);
    this.loadRevisions(this.page);
  }

  loadRevisions(page) {
    this.loading = true;
    this.guarantee2.page=page;
    this.guarantee2.resultsByPage=this.rowsNumber;
    let dataModel = {
      'data': this.guarantee2,
      'page': page,
      'resultsByPage':this.rowsNumber
    }

    this.garantiaService.getFilter(this.guarantee2).then((data:any) => {
            this.revisions = data.revisions;
            this.totalRecords = data.numberOfRevisions;
            this.loading = false;
        },
        error => {
            this.loading = false;
        }
    );
  }

  exportAsXLSX(): void {
    let guaranteeExport: Array<GuaranteeExport> = new Array<GuaranteeExport>();
    let gList = <Array<Revision>>this.revisions;
    gList.forEach(e => {
      let guarantee: GuaranteeExport = {
         "Nome_da_Garantia": e.guarantee.name,
         "Valor":e.guarantee.value,
         "ID":e.guarantee.id,
         "Tipo":e.guarantee.guaranteeType,
         "Outros":e.guarantee.otherType,
         "Data_de_Cadastro":e.guarantee.createdAt,
         "Vigência_Inicial":e.guarantee.timeSpanFinal,
         "Vigência_Final":e.guarantee.timeSpanInitial
      };
      guaranteeExport.push(guarantee);
    });
    this.excelService.exportAsExcelFile(guaranteeExport, 'Guarantee');
  }

  getGarantia(id: number){
    this.router.navigate(["/garantia", id]);
  }

}
