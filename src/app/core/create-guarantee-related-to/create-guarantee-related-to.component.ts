import { Component, OnInit, Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { GarantiasService } from '../../garantias/garantias.service';
import { SecurityService } from '../../security/security.service';
import { RevisionService } from '../../services/revision.service';
import { MenuItem } from 'primeng/primeng';
import { MapComponent } from '../../core/map/map.component';
import { guaranteeRevisionSkel } from './../models';

@Component({
  selector: 'create-guarantee-related-to',
  templateUrl: './create-guarantee-related-to.component.html',
  styleUrls: ['./create-guarantee-related-to.component.scss']
})
export class CreateGuaranteeRelatedToComponent implements OnInit {
  @Input() relatedTo:number;
  @Output() guaranteeCreated = new EventEmitter<string>();

  @ViewChild(MapComponent) map: MapComponent;
  
  
  unitsList = new Array();

  stepActiveIndex:number = 0;
  displayDialog: boolean;
  step_img = require("./../../../assets/layout/images/audsat-images/cadastro/garantias/3etapas/0-3g.svg");

  newThing = -1;
  revision:any  = guaranteeRevisionSkel;
  
  constructor(
    private guaranteeService: GarantiasService,
    private securityService: SecurityService,
    private revisionService: RevisionService
  ) {
    this.unitsList = this.securityService.getUnitsList();
  }

  ngOnInit() {
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

  save() {
    // TODO: show loading
    if(this.newThing==0){
      delete this.revision.thing.revisions;
      delete this.revision.user;
    }
    this.revisionService.attachCreate(this.revision,this.relatedTo, null).then((response: any) => {
        // TODO: hide loading
        this.hideDialog();
        this.guaranteeCreated.emit('complete');

    });
  }

  goTo(i:number){
    this.stepActiveIndex = i;
    this.step_img = require("./../../../assets/layout/images/audsat-images/cadastro/garantias/3etapas/"+i+"-3g.svg");
    if(i==1){
      this.map.updateSize();
    }
  }

  setCoordinates(event){
    this.revision.property.coordinates = JSON.stringify(event);
  }

  showDialog() {
    this.displayDialog = true;
  }
  hideDialog() {
    this.displayDialog = false;
  }
  resetForm(){
    this.revision  = guaranteeRevisionSkel;
  }
}
