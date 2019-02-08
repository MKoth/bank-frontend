import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecurityService } from '../../security/security.service';
import { RevisionService } from '../../services/revision.service';
import { Revision, modelTypeGuarantee} from "./../../core/models";
import { RsaService } from "../../services/rsa.service";


@Component({
  selector: 'app-garantiasdetails',
  templateUrl: './garantiasdetails.component.html',
  styles: []
})

export class GarantiasdetailsComponent implements OnInit {
  @Input() revision: Revision;
  @Input() extended: boolean = false;

  loading = false;
  disabled = true;
  approveDisable:boolean = false;
  unitsList = new Array();
  mapHeight:string = null;
  marker:string = "";

  @ViewChild('entitydetails') entitydetails:any;
  map:any;
  guaranteeType:any="";
  guaranteeOptions = modelTypeGuarantee;
  
  constructor(
    private messageService: MessageService,
    private securityService: SecurityService,
    private revisionService: RevisionService,
    private rsaService: RsaService,

  ) {
    this.unitsList = this.securityService.getUnitsList();
  }

  ngOnInit() {
    this.approveDisable = this.revision.status !== 'Protótipo';
    this.marker = this.revision.guarantee.guaranteeType == "Hipotecária" ? "fa fa-fw fa-map-marker":""; 
    this.getCarInfo();
    // this.getCarPolygon();
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.mapHeight = document.getElementsByClassName("client-one-section")[0].scrollHeight+'px';
    },100);
    this.map = this.entitydetails.map;
    if(!this.revision.property.coordinates)
      return;
    let coords = JSON.parse(this.revision.property.coordinates);
    if(coords.length==0)
      return;
    this.map.dataImoveis = coords;
    this.map.longitude = coords[0][1];
    this.map.latitude  = coords[0][0];
  }

  showApprove(){
    this.messageService.add({ severity:'success', summary:'Successo', detail: "Garantia Aprovada"});
  }

  editGarantias(form :NgForm){
    delete this.revision.thing.revisions;
    delete this.revision.user;
    this.loading = true;
    // can not use finally due to angular bug
    this.revisionService.register(this.revision)
      .then((revision:Revision) => {
        this.revision  = revision;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

   getCarInfo(){
     setTimeout(()=>{
       console.log('chegou');
       this.getCarPolygon();
     },1500);
  }

  getCarPolygon(){
      setTimeout(()=>{
       console.log('chegou')
     },1500);

    let coords = JSON.parse(this.revision.property.coordinates);
    this.map.dataImoveis = coords;
    this.map.longitude = coords[0][1];
    this.map.latitude  = coords[0][0];
  
  }
  
}


