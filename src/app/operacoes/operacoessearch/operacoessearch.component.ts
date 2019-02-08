import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { OperacoesService } from "../operacoes.service";
import { NgForm } from '@angular/forms';
import { Client, Revision, Operations, modelStatus, modelFiscalizationStatus, modelCulture, OperationsExport } from "./../../core/models";
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Message, LazyLoadEvent } from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { UnitService } from "./../../services/unit.service"
import { ExcelService } from "./../../services/excel.service";

  class Datacadastro {
    inicio: string;
    fim: string;
  }

  class Dataaprovacao {
    inicio: string;
    fim: string;
  }

  class OperationForm {
    inclusionDate1: any;
    inclusionDate2: any;
    code: any;
    cpfcnpj: any;
    complement: any;
    crop: any;
    name: any;
    valuationStatusDate1: any;
    valuationStatusDate2: any;
    status: any;
    fiscalizationSituation: any;
    page: number;
    resultsByPage: number;
  }

@Component({
  selector: 'app-operacoessearch',
  templateUrl: './operacoessearch.component.html',
  styleUrls: ['./operacoessearch.component.scss']
})

export class OperacoessearchComponent implements OnInit {
    //   form=new FormGroup({
  //   cpf: new FormControl('',[Validators.required, Validators.minLength(11)]),
  //   name: new FormControl('',Validators.required),
  //   CAR: new FormControl('',Validators.required),

  // })
  // datacadastro: string;
  // dataaprovacao: string;
  cropModel = modelCulture;
  statusModel = modelStatus;
  fiscalizationStatusModel = modelFiscalizationStatus;
  displayDialog: boolean;
  ready:boolean = false;
  operation:OperationForm = new OperationForm();
  operation2:OperationForm = new OperationForm();
  onoff: boolean;
  unitsvector: any[] = [];
  revisions: Revision[];
  status:any =  modelStatus;
  selectedStatus: string = "";
  selectedValue: string = "inclusionDate";
  en: any;
  liga: boolean;
  //cpfMask:any;
  loading: boolean=false;
  page:number;
  totalRecords:number;
  rowsNumber:number=10;

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

  constructor(private route: ActivatedRoute,
    private operacaoService: OperacoesService,
    private excelService: ExcelService,
    private router: Router,
    private unitservice: UnitService
    ) {
    // this.myForm = this.fb.group({
      // private fb: FormBuilder
    //   myRadio: ['val1', []] // This set default value
    // })
  // this.rForm = fb.group({
  //   'cpf':[null, Validators.compose([Validators.required,Validators.minLength(11)])]

  // });
  }

  buscar(form: NgForm) {
    this.operation2 = Object.assign({},this.operation);
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

  getCpf(event){
    this.cpfMask = event;
  }

  showDialog() {
      this.displayDialog = true;
  }

  closeDialog() {
      this.displayDialog = false;
  }

  resetForm(form:NgForm){
    form.reset();
    this.selectedValue = "inclusionDate"
  }

  changePage(event: LazyLoadEvent){
    this.page = Math.round(event.first/10);
    this.loadRevisions(this.page);
  }

  loadRevisions(page) {
    this.loading = true;
    this.unitsvector=[];
    this.operation2.page=page;
    this.operation2.resultsByPage=this.rowsNumber;
    let dataModel = {
      'data': this.operation2,
      'page': page,
      'resultsByPage':this.rowsNumber
    }

    this.operacaoService.getFilter(this.operation2).then((data:any) => {
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

  exportAsXLSX(): void {
    let operationsExport: Array<OperationsExport> = new Array<OperationsExport>();
    let oList = <Array<Revision>>this.revisions;
    oList.forEach(e => {
      var operations: OperationsExport = {
        "Codigo": e.operation.code,
        "CPF_CNPJ": "",
        "Complemento": "",
        "Cultura": e.operation.crop,
        "Area": null,
        "Ponto_Atendimento": e.units,
        "Data_Cadastro": e.thing.createdAt,
        "Situacao": e.status,
        "Situacao_Da_Fiscalizacao": e.operation.fiscalizationStatus
      };
      operationsExport.push(operations);
    });
    this.excelService.exportAsExcelFile(operationsExport, 'Operacoes');
  }

  getOperacao(tid: number) {
    this.router.navigate(["/operacao", tid]);
  }

}
