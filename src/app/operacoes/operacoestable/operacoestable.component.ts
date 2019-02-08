import { Component, OnInit, Input,DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { OperacoesService } from "../operacoes.service";
import { ExcelService } from "./../../services/excel.service";
import { Client, Revision, PropertyExport, Property, Operations, OperationsExport } from "./../../core/models";
import { UnitService } from "./../../services/unit.service"

@Component({
  selector: 'app-operacoestable',
  templateUrl: './operacoestable.component.html',
  styleUrls: ['./operacoestable.component.scss']
})
export class OperacoestableComponent implements OnInit, DoCheck {
  @Input() revisions: Revision[];
  onoff: boolean;
  unitsvector: any[] = [];

  constructor(private excelService: ExcelService,
    private router: Router,
    private route: ActivatedRoute,
    private operationService: OperacoesService,
    private unitservice: UnitService
  ) { }

  selectRowindex: any;
  item: any;

  ngOnInit() {
    this.onoff = true;
  }
  ngDoCheck() {

    if(this.revisions.length>0 && this.onoff == true){
      this.unitsvector = this.unitservice.unitsShow(this.revisions);
 
    }

 
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
