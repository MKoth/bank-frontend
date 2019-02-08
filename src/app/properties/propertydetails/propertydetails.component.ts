import { Component, OnInit, Input,ViewChild,Output,EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { RsaService } from "../../services/rsa.service";
import { SecurityService } from '../../security/security.service';
import { RevisionService } from '../../services/revision.service';
import { Revision, Unit ,User, Property, Thing} from "../../core/models";
import { Router } from "@angular/router";
import { PropertiesService } from './../properties.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MapComponent } from '../../core/map/map.component';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html',
  styles: []
})
export class PropertydetailsComponent implements OnInit {
  @Input() revision: Revision;
  @Input() extended: boolean = false;
  @Output() sendPolygon = new EventEmitter();

  loading = false;
  disabled = true;
  approveDisable:boolean = false;
  unitsList = new Array();
  mapHeight:string = null;

  @ViewChild('entitydetails') entitydetails:any;
  map:any;

  infoCar:any;
  restrition:any;
  houveRetificacao:any;

  constructor(
    private messageService: MessageService,
    private rsaService: RsaService,
    private revisionService: RevisionService,
    private securityService: SecurityService,
  ) {
    this.unitsList = this.securityService.getUnitsList();
  }

  ngOnInit() {
    this.restrition = this.revision.property.restrition? 'Sim':'Não';
    this.houveRetificacao = (this.infoCar&&this.infoCar.cabecalho.houveRetificacao)?'Sim':'Não';
    this.approveDisable = this.revision.status !== 'Protótipo';
    this.getCarInfo();
    this.getCarPolygon();
  }

  ngAfterViewInit(){
    this.map = this.entitydetails.map;
    setTimeout(()=>{
      this.mapHeight = document.getElementsByClassName("client-one-section")[0].scrollHeight+'px';
    },100);
    if(!this.revision.property.coordinates)
      return;
    let coords = JSON.parse(this.revision.property.coordinates);
    if(coords.length==0)
      return;
    this.map.dataImoveis = coords;
    this.map.longitude = coords[0][1];
    this.map.latitude  = coords[0][0];

  }

  setExtend(e){
    this.extended = e;
  }

  showApprove(){
    this.messageService.add({ severity:'success', summary:'Successo', detail: "Imóvel Aprovado"});
  }

  editProperty(form :NgForm){
    delete this.revision.thing.revisions;
    delete this.revision.user;
    this.loading = true;
    // can not use finally due to angular bug
    this.revisionService.save(this.revision)
      .then((revision:any) => {
        this.revision  = revision;
        this.loading = false;
      })
      .catch((error:any) => {
        this.loading = false;
      });
  }

  toggleEdit(){
    this.disabled = !this.disabled;
    this.map.edit = !this.disabled;
  }

  newCoordinates(event){
    this.revision.property.coordinates = JSON.stringify(event);
  }

  getCarInfo(){
    this.rsaService.carInfo(this.revision.property.car).then((response:any)=>{
      if(response.dados.cabecalho!=null){
        this.infoCar = response.dados;
      }
    }).catch(error => {});
  }

  getCarPolygon(){
    this.rsaService.carPolygon(this.revision.property.car).then((response:any)=>{
      if(response.features.length!=0){
        if (response.features[0].geometry.type == "MultiPolygon" || response.features[0].geometry.type =="Polygon") {
          // this.revision.property.coordinates = JSON.stringify(<any>response.features[0].geometry.coordinates[0][0]);
          this.map.dataImoveis=<any>response.features[0].geometry.coordinates[0];
          this.sendPolygon.emit(response.features[0].geometry.coordinates[0]);
          this.map.longitude = this.map.dataImoveis[0][0][1];
          this.map.latitude = this.map.dataImoveis[0][0][0];
        }else{
          // this.map.pointDataImoveis = <any>response.features[0].geometry.coordinates[0][0];
        }
      }else{
        // this.noCarPolygon();
      }
    }).catch((error:any)=>{
      // this.noCarPolygon();
    })
  }

  centerMap(event){
    this.map.goTo(this.infoCar.cabecalho.centroideX,this.infoCar.cabecalho.centroideY);
  }

}
