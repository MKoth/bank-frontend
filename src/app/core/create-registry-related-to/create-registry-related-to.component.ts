import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatriculaService } from '../../matricula/matricula.service';
import { SecurityService } from '../../security/security.service';
import { RevisionService } from '../../services/revision.service';
import { Revision } from "../../core/models";
import { registryRevisionSkel }  from "../../core/models";
import { TabViewModule } from 'primeng/tabview';
import { MenuItem } from 'primeng/primeng';
import { MapComponent } from '../../core/map/map.component';

// import { MessageService } from "primeng/components/common/messageservice";
// import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'create-registry-related-to',
  templateUrl: './create-registry-related-to.component.html',
  styleUrls: ['./create-registry-related-to.component.scss']
})
export class CreateRegistryRelatedToComponent implements OnInit {
  @Input() canBeGuarantee: boolean = true;
  @Input() relatedTo:any;
  @Input() type:string;
  @ViewChild( "map" ) map: MapComponent;
  @Output() registryCreated = new EventEmitter<string>();
  @Output() reload = new EventEmitter();

  @ViewChild("registryStep") registryStep;
  step_img = require("./../../../assets/layout/images/audsat-images/cadastro/matriculas/2etapas/0-2r.svg");
  displayDialog: boolean;
  newThing = -1;
  unitsList = new Array();
  items: MenuItem[];
  stepActiveIndex:number = 0;
  modalHeight:number=600;

  code:boolean = false;
  notCode:boolean = true;

  polygons:any[];
  coordinates:any;
  coordinate:any;
  revisionLoaded: Promise<boolean>;
  validated:boolean = false;

  revision:any  = registryRevisionSkel;

  relationType: string;

  constructor(
    private revisionService: RevisionService,
    private matriculaService: MatriculaService,
    private securityService: SecurityService
  ) {
    this.securityService.getUnitsWrite().forEach(unit => {
      this.unitsList.push({label:unit.unitLabel,value:unit})
    })
  }

  ngOnInit() {
  }

  // loadRevision(){
  //   this.newThing = -1;
  //   this.matriculaService.getByCode(this.revision.registry.code).then((revision:any) =>{
  //     this.code = true;
  //     this.notCode = false;
  //     this.validated = true
  //     this.newThing = 0;
  //     this.revision = revision;
  //     if(this.revision.registry.coordinates!=null && this.revision.registry.coordinates!=""){
  //       this.coordinates = JSON.parse(this.revision.registry.coordinates);
  //       this.coordinate = this.coordinates[0].coordinates;
  //     }
  //     console.log(this.coordinate);
  //     this.revisionLoaded = Promise.resolve(true);
  //   }).catch(error => {
  //     this.newThing = 1;
  //     this.validated = true;
  //     this.revisionLoaded = Promise.resolve(true);
  //     this.revision = {
  //       registry: {
  //         name: "",
  //         code: this.revision.register.code,
  //         coordinates:""
  //       },
  //       units: []
  //     };
  //   });
  // }

  save() {
    this.registryStep.revision.user={};
    this.registryStep.guarantee.revision.user={};
    this.relatedTo.user = {};
    let clientRevision = null;
    let propertyRevision = null;
    let guaranteeRevision = this.registryStep.guarantee.isGuarantee?this.registryStep.guarantee.revision:null;
    let operationRevision = null;

    if(this.type==="client") {
      clientRevision = this.relatedTo;
    } else if(this.type==="property") {
      propertyRevision = this.relatedTo;
    } else if(this.type==="guarantee") {
      guaranteeRevision = this.relatedTo;
    }

    // TODO: show loading
    this.matriculaService.saveWizard(
      clientRevision,
      propertyRevision,
      this.registryStep.revision,
      operationRevision,
      guaranteeRevision,
      null
    ).then((revision:any) => {
      this.reload.emit();
      // TODO: hide loading
      this.hideDialog();
    }).catch(error => {
      // TODO: hide loading
      this.hideDialog();
    });
  }
  // attachProperty() {
  //   // TODO: show loading
  //   if(this.newThing==0){
  //     delete this.revision.thing.revisions;
  //     delete this.revision.user;
  //   }
  //   this.revisionService.attachCreate(this.revision,this.relatedTo.id, this.relationType).then((response: any) => {
  //       // TODO: hide loading
  //       this.closeDialog();
  //       this.registryCreated.emit('complete');
  //       window.location.reload();
  //   }).catch(error=>{
  //     console.log(error);
  //   });
  // }
  goTo(i:number){
    this.stepActiveIndex = i;
    this.step_img = require("./../../../assets/layout/images/audsat-images/cadastro/matriculas/2etapas/"+i+"-2r.svg");
    if(i==1){
      this.map.updateSize();
      this.modalHeight=600;
    } else {
      this.modalHeight=500;
    }
  }
  // getCoordinates(event) {
  //   console.log(event);
  //   this.polygons = [];
  //   event.forEach(e=>{
  //       this.polygons.push(e);
  //   })
  //   this.revision.registry.coordinates = JSON.stringify(this.polygons);

  // }
  setRegistryCoordinates(event){
    this.registryStep.revision.registry.coordinates = JSON.stringify(event);
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
    this.registryStep.resetForm()
  }
}
