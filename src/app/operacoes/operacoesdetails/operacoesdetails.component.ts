import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { RsaService } from "../../services/rsa.service";
import { SecurityService } from '../../security/security.service';
import { RevisionService } from '../../services/revision.service';
import { Revision, Unit ,User, Client, Property, Thing, operationsRevisionSkel} from "../../core/models";
import { Router } from "@angular/router";
import { PropertiesService } from './../../properties/properties.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MapComponent } from '../../core/map/map.component';

@Component({
  selector: 'app-operacoesdetails',
  templateUrl: './operacoesdetails.component.html',
  styles: []
})
export class OperacoesdetailsComponent implements OnInit {

  @Input() revision: Revision;
  @Input() detailsCollapsed: any;
  @Input() pointData: any;
  @Input() data: any;
  @Input() tabType: any;
  @Input() extended: boolean = false;

  cpfcnpj="123.456.789-00";
  city="Sao Paulo";
  accessGuide="";
  restriction="no";
  area="10";
  clone="clone";
  vigency="V";
  cadastrante="nome";
  car="123123123132";

  loading = false;
  disabled = true;
  approveDisable:boolean = false;
  unitsList = new Array();
  mapHeight:string = null;

  @ViewChild('entitydetails') entitydetails:any;
  map:any;
  page: HTMLElement;
  expanded = false;

  displayDialog: boolean;


  constructor(
    private messageService: MessageService,
    private securityService : SecurityService,
    private revisionService: RevisionService,
  ) {
    this.securityService.getUnitsWrite().forEach(unit => {
      this.unitsList.push({label:unit.unitLabel,value:unit})
    })
    console.log(this.unitsList);
  }

  showDialog() {
    this.displayDialog = true;
  }
  onToggleExtend(){
    this.expanded = !this.expanded;
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      console.log(this.map);
      console.log(document.getElementsByClassName("client-one-section")[0].scrollHeight);
      //this.mapHeight = document.getElementsByClassName("client-one-section")[0].scrollHeight+'px';
      this.map.height = document.getElementsByClassName("client-one-section")[0].scrollHeight+50+'px';
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


//  ngAfterViewInit(){
//    this.map = this.entitydetails.map;
//    if(!this.revision.property.coordinates)
//      return;
//    let coords = JSON.parse(this.revision.property.coordinates);
//    if(coords.length==0)
//      return;
//    this.map.dataImoveis = coords;
//    this.map.longitude = coords[0][1];
//    this.map.latitude  = coords[0][0];
//  }

    /*this.page = <HTMLElement>document.getElementsByClassName('layout-wrapper')[0];
    html2canvas(this.page).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.addPage();
      pdf.setPage(2);
      pdf.addImage(contentDataURL, 'PNG', 0, -pageHeight, imgWidth, imgHeight);
      pdf.addPage();
      pdf.setPage(3);
      pdf.addImage(contentDataURL, 'PNG', 0, -2*pageHeight, imgWidth, imgHeight);
      pdf.save('operacoes.pdf'); // Generated PDF
    });*/



  ngOnInit() {
    
  }
  centerMap(event){
  }
  toggleEdit(){
    this.disabled = !this.disabled;
    this.map.edit = !this.disabled;
  }

  newCoordinates(event){
    this.revision.registry.coordinates = JSON.stringify(event);
  }
  setExtend(e){
    this.extended = e;
  }
  editOperation(){

  }
}
