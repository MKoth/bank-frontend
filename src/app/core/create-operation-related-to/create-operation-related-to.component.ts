import { RevisionService } from './../../services/revision.service';
import { operationsRevisionSkel, modelOperationType, modelCulture } from './../models';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OperacoesService } from '../../operacoes/operacoes.service';
import { MapComponent } from '../../core/map/map.component';
import { SecurityService } from '../../security/security.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'create-operation-related-to',
  templateUrl: './create-operation-related-to.component.html',
  styleUrls: ['./create-operation-related-to.component.scss']
})
export class CreateOperationRelatedToComponent implements OnInit {
  @Input() relatedTo:any;
  @Input() type:string;
  @Output() reload = new EventEmitter();
  @Output() propertyCreated = new EventEmitter<string>();

  cultureList:any;
  operationType:any;
  //@ViewChild("operationStep") operationStep;
  //@ViewChild("map") map: MapComponent;
  modalHeight:number=500;
  newThing:number=-1;
  revision = operationsRevisionSkel;
  //stepActiveIndex:number = 0;
  displayDialog: boolean;
  //step_img = require("./../../../assets/layout/images/audsat-images/cadastro/imoveis/2etapas/0-2p.svg");
  unitsList = new Array();

  constructor(
    private operacoesService: OperacoesService, private securityService: SecurityService, private revisionService:RevisionService
  ) {this.unitsList = this.securityService.getUnitsList(); }

  ngOnInit() {
    this.operationType = modelOperationType;
    this.cultureList = modelCulture;
  }

  getOperation(){
    //this.newThing = 0;
    this.operacoesService.getByCode(this.revision.operation.code).then((revision:any) =>{
      this.newThing = 0;
      this.revision = revision;
    }).catch(error => {
      this.newThing = 1;
      this.revision = {
        operation: {
          operationType: "",
          code: this.revision.operation.code,
          crop: ""
        },
        units: []
      };
    });
  }
  save() {
    this.operacoesService.attach(this.revision.id, this.relatedTo.id).then((revision:any) =>{
      this.reload.emit();
      console.log(revision);
      setTimeout(window.location.reload.bind(location), 2000); //reload page when upload file was successful after 2s.
    });

    // this.operationStep.revision.user={};
    // this.operationStep.guarantee.revision.user={};
    // this.relatedTo.user = {};
    // let clientRevision = null;
    // let registryRevision = null;
    // let propertyRevision = null;
    // let guaranteeRevision = null;

    // if(this.type==="client") {
    //   clientRevision = this.relatedTo;
    // } else if(this.type==="registry") {
    //   registryRevision = this.relatedTo;
    // } else if(this.type==="property") {
    //   propertyRevision = this.relatedTo;
    // } else if(this.type==="guarantee") {
    //   guaranteeRevision = this.relatedTo;
    // }

    // // TODO: show loading
    // this.operacoesService.saveWizard(
    //   clientRevision,
    //   this.operationStep.revision,
    //   registryRevision,
    //   guaranteeRevision,
    //   this.operationStep.propertyClientRelationType
    // ).then((revision:any) => {
    //   // TODO: hide loading
    //   this.hideDialog();
    // }).catch(error => {
    //   // TODO: hide loading
    //   this.hideDialog();
    // });
  }
/**
  goTo(i:number){
    this.stepActiveIndex = i;
    this.step_img = require("./../../../assets/layout/images/audsat-images/cadastro/imoveis/2etapas/"+i+"-2p.svg");
    if(i==1){
      this.map.updateSize();
      this.modalHeight=600;
    } else {
      this.modalHeight=500;
    }
  }
*/
  showDialog() {
//    this.resetForm();
    this.displayDialog = true;
  }
  hideDialog() {
//    this.resetForm();
    this.displayDialog = false;
  }
  resetForm(form:NgForm){
    //this.revision = operationsRevisionSkel;
    form.reset();
    this.newThing = -1;
  }

}
