import { SecurityService } from './../../security/security.service';
import { Component, OnInit, Input, Output, ViewChild , EventEmitter} from '@angular/core';
import { RevisionService } from './../../services/revision.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { NgForm } from '@angular/forms';
import { Revision } from "./../../core/models";
import { Router } from "@angular/router";


@Component({
  selector: 'app-matriculadetails',
  templateUrl: './matriculadetails.component.html',
  styles: []
})
export class MatriculadetailsComponent implements OnInit {
  @Input() revision: Revision;
  @Input() extended: boolean = false;
  @Output() sendPolygon = new EventEmitter();

  loading = false;
  disabled = true;
  approveDisable:boolean = false;
  unitsList = new Array();
  mapHeight:string = null;
  registryData:any = "";
  
  @ViewChild('entitydetails') entitydetails:any;
  map:any;

  constructor(
    private messageService: MessageService,
    private revisionService: RevisionService,
    private securityService: SecurityService 
  ){
    this.unitsList = this.securityService.getUnitsList();
  }

  ngOnInit() {
    this.approveDisable = this.revision.status !== 'Protótipo';
    this.getCarInfo();
    // this.getPolygon();
  }

  ngAfterViewInit(){
    this.map = this.entitydetails.map;
    setTimeout(()=>{
      this.mapHeight = document.getElementsByClassName("client-one-section")[0].scrollHeight+'px';
    },100);
    if(!this.revision.registry.coordinates){
      let coords = JSON.parse(this.revision.registry.coordinates);
    if(coords.length!=0){
      this.map.dataMatricula = coords;
      this.map.longitude = coords[0][1];
      this.map.latitude  = coords[0][0];
    }
  }
}
  // ngAfterViewChecked(){
  //   console.log(this.entitydetails);
  //   this.map = this.entitydetails.map;

  // }

  showApprove(){
    this.messageService.add({ severity:'success', summary:'Successo', detail: "Matrícula Aprovada"});
  }

  editRegistry(form: NgForm){
    delete this.revision.thing.revisions;
    delete this.revision.user;
    this.loading = true;
    // can not use finally due to angular bug
    this.revisionService.create(this.revision)
      .then((revision:Revision) => {
        this.revision  = revision;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  toggleEdit(){
    this.disabled = !this.disabled;
    this.map.edit = !this.disabled;
  }

  newCoordinates(event){
    this.revision.registry.coordinates = JSON.stringify(event);
  }

  centerMap(event){
    // this.map.goTo(this.infoCar.cabecalho.centroideX,this.infoCar.cabecalho.centroideY);
  }

   getCarInfo(){
     setTimeout(()=>{
       console.log('chegou');
       this.getPolygon();
     },1200);
  }

  getPolygon(){
    if (!this.revision.registry.coordinates){
    this.registryData = JSON.parse(this.revision.registry.coordinates);
    this.map.dataMatricula= this.registryData.coordinates;
    this.sendPolygon.emit(this.registryData.coordinates);
    this.map.longitude = this.map.dataMatricula[0][0];
    this.map.latitude = this.map.dataMatricula[0][1];
  }
  }
  
}


