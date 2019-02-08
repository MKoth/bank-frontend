import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SecurityService } from '../../security/security.service';
import { GarantiasService } from '../../garantias/garantias.service';
import { guaranteeRevisionSkel, Revision } from "../../core/models";

@Component({
  selector: 'guarantee-wizard-embed',
  templateUrl: './guarantee-wizard-embed.component.html',
  styleUrls: ['./guarantee-wizard-embed.component.scss']
})
export class GuaranteeWizardEmbedComponent implements OnInit {
  @Input() canRelateToOperation: boolean = true;
  newThing = -1;
  revision = guaranteeRevisionSkel;
  newThingOperation = -1;
  // operationRevision: Revision;
  unitsList = new Array();
  isGuarantee:boolean;
  en:any;
  blockSpecial: RegExp = /^[ a-zA-Z0-9 \u00A8-\u028F]*$/;

  constructor(
    private guaranteeService: GarantiasService,
    private securityService : SecurityService
  ) {
    this.unitsList = this.securityService.getUnitsList();
  }

  ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNamesMin: ["Seg.","Ter.","Qua.","Qui.","Sex.","Sáb.","Dom."],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      clear: 'Clear'
    };
  }
  getGuarantee(){
    this.newThing = -1;
    this.guaranteeService.getByName(this.revision.guarantee.name).then((revision:any) =>{
      this.newThing = 0;
      this.revision = revision;
    }).catch(error => {
      this.newThing = 1;
    });
  }
  getOperation(){
    // TODO: check reset function
    this.newThingOperation = -1;
    // this.operationService.getByCode(this.operationRevision.operation.code).then((revision:any) =>{
    //   this.newThingOperation = 0;
    //   this.operationRevision = revision;
    // }).catch(error => {
    //   this.newThingOperation = 1;
    // });
  }

  resetForm(){
    this.newThing = -1;
    this.revision = guaranteeRevisionSkel;
  }
}
