import { Component, OnInit, OnChanges, SimpleChanges, Input,ViewChild,Output,EventEmitter } from '@angular/core';
import { Revision } from "../models";
import { RevisionService } from "../../services/revision.service";
// import {MapComponent} from '../../core/map/map.component';
import { GarantiasService } from "../../garantias/garantias.service";


@Component({
  selector: 'relations-tabs',
  templateUrl: './relations-tabs.component.html',
  styleUrls: ['./relations-tabs.component.scss']
})
export class RelationsTabsComponent implements OnInit, OnChanges {
  @Output() sendData = new EventEmitter();
  @Output() getTabPolygon = new EventEmitter();
  @Input() revision:any;
  @Input() type:string;
  // @Input() map:any;
  // @ViewChild(MapComponent) map: MapComponent;
  tempCoords:any;
  guaranteeHasOperation:boolean = false;
  // @Input() revisionId:number;


  clientTab = {
    revisions: [],
    hasAlerts: false
  };
  propertyTab = {
    revisions: [],
    hasAlerts: false
  };
  registryTab = {
    revisions: [],
    hasAlerts: false
  };
  guaranteeTab = {
    revisions: [],
    hasAlerts: false
  };
  operationTab = {
    revisions: [],
    hasAlerts: false
  };

  types=["client","property","registry","operation","guarantee"];



  constructor(
    private revisionService: RevisionService,
    private garantiasService: GarantiasService
  ) { }

  ngOnInit() {
    if (this.type=='guarantee'){
      this.garantiasService.hasOperation(this.revision.guarantee.name).then(data => {
        this.guaranteeHasOperation = true
      })
      .catch((error:any) => {
        this.guaranteeHasOperation = false;
      });
    }
    /**check if guarantee has operations;
      guaranteeHasOperation=true;*/
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['revision']) {
      if(this.revision!=null){
        this.types.forEach(t => {
          if(t==this.type) return;
          this.load(t);
        });
      }
    }
  }

  tabChanged(e){
    // console.log(this.map);
    console.log('aqyi');
    console.log(e);
    let options = [this.propertyTab.revisions,this.registryTab.revisions,this.operationTab.revisions,this.guaranteeTab.revisions];
    let types = ['property','registry','operation','guarantee'];
    let index = e.index;
    console.log(index);
    console.log(options[index]);
    // console.log(this.propertyTab.revisions);
    let intermediary = [];
    let newCoordinates = [];
    options[index].forEach(property =>{
      console.log('aqui');
      console.log(property);
      intermediary.push(property);

    })
    intermediary.forEach(coords =>{
      switch(index){
        case 0:
           this.tempCoords = coords.property.coordinates;
          break;
        case 1:
           this.tempCoords = coords.registry.coordinates;
          break;
        case 2:
           this.tempCoords =coords.operation.coordinates;
          break;
        case 3:
           this.tempCoords = coords.guarantee.coordinates;
          break;
      }
      if(this.tempCoords!=""){
      console.log(JSON.parse(this.tempCoords));
        let coordsParsed = JSON.parse(this.tempCoords);
        let rightCoords = coordsParsed[0].coordinates;
        console.log(rightCoords);
        newCoordinates.push(rightCoords);
      }
    })
    // console.log(this.map);
    console.log(newCoordinates);
    let tabMapData = {type:types[index],coordinates:newCoordinates};
    this.sendData.emit(tabMapData);
    // this.map.resetToPolygonSide(tabMapData);
  }

  load(type:string){
    console.log(type);
    console.log('chegou');
    this.revisionService.getRelatedRevisions(this.revision.id,type).then((revisions: Revision[]) => {
      console.log(revisions);
      this[type+"Tab"].revisions = revisions;
      this[type+"Tab"].revisions.forEach((revision:Revision) => {
        if ((revision.alertsCounter > 0) || (revision.attentionsCounter > 0)) {
          this[type+"Tab"].hasAlerts = true;
        }
      });
    });
  }

  centerMap(event){
    console.log(event);
    // console.log(this.mapp);
    // console.log(this.map.resetToSomewhere());
    // this.map.resetToSomewhere(event.cabecalho.centroideX,event.cabecalho.centroideY);
  }

  centerToPolygon(event){
    console.log(event);
    let coordinates =JSON.parse(event.coordinates);
    let newCoordinates = [];
    newCoordinates.push(coordinates[0].coordinates);
    let tabMapData = {type:event.type,coordinates:newCoordinates};
    console.log(coordinates);
    this.getTabPolygon.emit(tabMapData);
    // this.map.resetToPolygonSide(tabMapData);
  }

  reload(){
        setTimeout(window.location.reload.bind(location), 2000);
  }

}
