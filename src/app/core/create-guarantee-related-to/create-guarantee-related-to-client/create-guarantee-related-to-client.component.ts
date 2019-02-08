import { SelectItem } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { MenuItem } from 'primeng/primeng';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { GarantiasService } from '../../../garantias/garantias.service';
import { ClientsService } from '../../../clients/clients.service';
import { RsaService } from '../../../services/rsa.service';
import { MatriculaService } from '../../../matricula/matricula.service';
import { RevisionService } from '../../../services/revision.service';
import { PropertiesService } from '../../../properties/properties.service';
import { modelStatus, modelUnit,  modelTypeGuarantee, registryRevisionSkel, propertyRevisionSkel,guaranteeRevisionSkel, User, Revision, Guarantee, Client, stepsRevision, Unit} from "./../../models";
import { NgForm } from '@angular/forms';
import { SecurityService } from './../../../security/security.service';
import { MapComponent } from '../../map/map.component';

declare var require: any;


@Component({
  selector: 'create-guarantee-related-to-client',
  templateUrl: './create-guarantee-related-to-client.component.html',
  styleUrls: ['./create-guarantee-related-to-client.component.scss']
})

export class CreateGuaranteeRelatedToClientComponent implements OnInit {
  @Output() guaranteeCreated = new EventEmitter<string>();
  @Input() clientRevision:any;
  @ViewChild(MapComponent) map: MapComponent;
  @Output() reload = new EventEmitter();
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

  step_img = require("./../../../../assets/layout/images/audsat-images/cadastro/garantias/3etapas/0-3g.svg");

  constructor(
    private securityService:SecurityService,
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
    this.step_img = require("./../../../../assets/layout/images/audsat-images/cadastro/garantias/3etapas/"+i+"-3g.svg");
    if(i==3){
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

  resetForm(){
    this.guaranteeRevision = guaranteeRevisionSkel;
    this.propertyStep.revision = propertyRevisionSkel;
    this.registryStep.revision = registryRevisionSkel;
  }

  save() {
    this.clientRevision.user={}
    this.propertyStep.revision.user={};
    this.guaranteeRevision.user={};
    this.registryStep.revision.user={};
    // TODO: show loading
    this.garantiasService.saveWizard(
      this.clientRevision,
      this.isProperty || this.guaranteeRevision.guarantee.guaranteeType=="Outros" ? null:this.registryStep.revision,
      !this.isProperty || this.guaranteeRevision.guarantee.guaranteeType=="Outros" ? null:this.propertyStep.revision,
      this.guaranteeRevision,"client"
    ).then((revision:any) => {
      // TODO: hide loading
      this.reload.emit();
      this.hideDialog();
      window.location.reload();
    }).catch(error => {
      // TODO: hide loading
      this.hideDialog();
        this.guaranteeCreated.emit('complete');
    });
  }
}
