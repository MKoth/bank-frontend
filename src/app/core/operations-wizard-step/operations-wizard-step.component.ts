import { modelCulture, modelOperationType } from './../models';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RsaService } from '../../services/rsa.service';
import { SecurityService } from '../../security/security.service';
import { operationsRevisionSkel } from "../models";

@Component({
  selector: 'operation-wizard-step',
  templateUrl: './operations-wizard-step.component.html',
  styleUrls: ['./operations-wizard-step.component.scss']
})
export class OperationWizardStepComponent implements OnInit {
  @ViewChild("form") form;
  revision = operationsRevisionSkel;
  infoCar:any;
  unitsList = new Array();
  operationTypesList = new Array();
  culturasList = new Array();
  en:any;
  blockSpecial: RegExp = /^[ a-zA-Z0-9 \u00A8-\u028F]*$/;

  constructor(
    private rsaService: RsaService,
    private securityService : SecurityService
  ) {
    this.unitsList = this.securityService.getUnitsList();
    this.operationTypesList = modelOperationType;
    this.culturasList = modelCulture;
  }

  ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNamesMin: ["Seg.","Ter.","Qua.","Qui.","Sex.","Sáb.","Dom."],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      clear: 'Clear'
    };
  }
}
