import { SelectItem } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { MenuItem } from 'primeng/primeng';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GarantiasService } from '../garantias.service';
import { ClientsService } from '../../clients/clients.service';
import { RsaService } from '../../services/rsa.service';
import { MatriculaService } from '../../matricula/matricula.service';
import { RevisionService } from '../../services/revision.service';
import { PropertiesService } from '../../properties/properties.service';
import { modelStatus, modelUnit,  modelTypeGuarantee, User, Revision, Guarantee, Client, stepsRevision, Unit, guaranteeRevisionSkel, propertyRevisionSkel, registryRevisionSkel} from "./../../core/models";
import { NgForm } from '@angular/forms';
import { SecurityService } from './../../security/security.service';
import { MapComponent } from '../../core/map/map.component';

declare var require: any;


@Component({
  selector: 'app-includegarantias',
  templateUrl: './includegarantias.component.html',
  styleUrls: ['./includegarantias.component.scss']
})

export class IncludegarantiasComponent implements OnInit {
  @ViewChild(MapComponent) map: MapComponent;
  infoCar:any;
  modalHeight:number=500;
  stepActiveIndex:number = 0;
  displayDialog: boolean;
  items: MenuItem[];
  blockSpecial: RegExp = /^[ a-zA-Z0-9 \u00A8-\u028F]*$/;

  visible: boolean = false;
  finalize: boolean = false;
  polygons:any[] = [];
  unitsList = new Array();

  isProperty = false;
  en:any;
  newThingGuarantee = true;
  guaranteeRevision:any = guaranteeRevisionSkel;

  @ViewChild("propertyStep") propertyStep;
  @ViewChild("registryStep") registryStep;

  step_img = require("./../../../assets/layout/images/audsat-images/cadastro/garantias/3etapas/0-3g.svg");

  constructor(
    private securityService:SecurityService,
    private messageService: MessageService,
    private garantiasService: GarantiasService,
    private rsaService: RsaService,
    private propertiesService: PropertiesService,
    private revisionService: RevisionService
  ) {
    this.securityService.getUnitsWrite().forEach(unit => {
      this.unitsList.push({label:unit.unitLabel,value:unit})
    })
  }

  ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNamesMin: ["Seg.","Ter.","Qua.","Qui.","Sex.","Sáb.","Dom."],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      clear: 'Clear'
    };
  }

  getCoordinates(event){
    if(this.isProperty)
      this.propertyStep.revision.property.coordinates = JSON.stringify(event);
    else
      this.registryStep.revision.registry.coordinates = JSON.stringify(event);
  }

  getGuarantee(){
    this.newThingGuarantee = false;
    this.revisionService.getByKey("guarantee", this.guaranteeRevision.guarantee.name).then((revision:any) =>{
      this.newThingGuarantee = false;
      this.guaranteeRevision = revision;
    }).catch(error => {
      this.newThingGuarantee = true;
      this.guaranteeRevision = {
        guarantee: {
          type: this.guaranteeRevision.guarantee.type,
          value: this.guaranteeRevision.guarantee.value,
          timeSpanFinal: this.guaranteeRevision.guarantee.timeSpanFinal
        },
        units: []
      };
    });
  }


  goTo(i:number){
    if(i==1)
      this.isProperty=false;
    else if(i==2)
      this.isProperty=true;

    this.stepActiveIndex = i;
    this.step_img = require("./../../../assets/layout/images/audsat-images/cadastro/garantias/3etapas/"+i+"-3g.svg");
    if(i==2){
      this.map.updateSize();
    } else if(i==4){
      this.map.updateSize();
    }
  }

  next() {
    this.goTo(this.stepActiveIndex+1);
  }

  showDialog() {
    this.displayDialog = true;
    this.goTo(0);
  }

  hideDialog() {
   this.displayDialog = false;
   this.goTo(0);
  }


  save() {
    this.propertyStep.revision.user={};
    this.guaranteeRevision.user={};
    this.registryStep.revision.user={};
    // TODO: show loading
    this.garantiasService.saveWizard(
      null,
      this.isProperty || this.guaranteeRevision.guarantee.type=="Outros" ? null:this.registryStep.revision,
      !this.isProperty || this.guaranteeRevision.guarantee.type=="Outros" ? null:this.propertyStep.revision,
      this.guaranteeRevision,"guarantee"
    ).then((revision:any) => {
      // TODO: hide loading
      this.hideDialog();
    }).catch(error => {
      // TODO: hide loading
      this.hideDialog();
    });
    this.messageService.add({ severity:'sucess', summary:'Include com sucesso', detail:'A garantia foi incluida'});
  }
}
