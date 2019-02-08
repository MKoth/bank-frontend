import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PropertiesService } from '../../properties/properties.service';
// import { RevisionService } from '../../services/revision.service';
import { TabViewModule } from 'primeng/tabview';
import { MapComponent } from '../../core/map/map.component';

@Component({
  selector: 'create-property-related-to',
  templateUrl: './create-property-related-to.component.html',
  styleUrls: ['./create-property-related-to.component.scss']
})
export class CreatePropertyRelatedToComponent implements OnInit {
  @Input() relatedTo:any;
  @Input() type:string;
  @Output() propertyCreated = new EventEmitter<string>();
  @Output() reload = new EventEmitter();

  @ViewChild("propertyStep") propertyStep;
  @ViewChild("map") map: MapComponent;
  modalHeight:number=500;

  stepActiveIndex:number = 0;
  displayDialog: boolean;
  step_img = require("./../../../assets/layout/images/audsat-images/cadastro/imoveis/2etapas/0-2p.svg");

  constructor(
    private propertiesService: PropertiesService
  ) {
  }

  ngOnInit() {
  }

  setPropertyCoordinates(event){
    this.propertyStep.revision.property.coordinates = JSON.stringify(event);
  }

  save() {
    this.propertyStep.revision.user={};
    this.propertyStep.guarantee.revision.user={};
    this.relatedTo.user = {};
    let clientRevision = null;
    let registryRevision = null;
    let guaranteeRevision = this.propertyStep.guarantee.isGuarantee?this.propertyStep.guarantee.revision:null;
    let operationRevision = null;

    if(this.type==="client") {
      clientRevision = this.relatedTo;
    } else if(this.type==="registry") {
      registryRevision = this.relatedTo;
    } else if(this.type==="guarantee") {
      guaranteeRevision = this.relatedTo;
    }

    // TODO: show loading
    this.propertiesService.saveWizard(
      clientRevision,
      this.propertyStep.revision,
      registryRevision,
      guaranteeRevision,
      this.propertyStep.propertyClientRelationType
    ).then((revision:any) => {
      // TODO: hide loading
      setTimeout(() =>  this.reload.emit(), 1000);
      this.hideDialog();
    }).catch(error => {
      // TODO: hide loading
      this.hideDialog();
    });
  }
  // save() {
  //   // TODO: show loading
  //   if(this.newThing==0){
  //     delete this.revision.thing.revisions;
  //     delete this.revision.user;
  //   }
  //   console.log(this.relationType)
  //   this.revisionService.attachCreate(this.revision,this.relatedTo, this.relationType).then((response: any) => {
  //       // TODO: hide loading
  //       this.closeDialog();
  //       this.propertyCreated.emit('complete');
  //       //window.location.reload();
  //   });
  // }

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

  showDialog() {
    this.resetForm();
    this.displayDialog = true;
  }
  hideDialog() {
    this.resetForm();
    this.displayDialog = false;
  }
  resetForm(){
    this.goTo(0);
    this.propertyStep.resetForm();
  }
}
