import { Component, OnInit, ViewChild, Input,ElementRef, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { MapEvent, proj,interaction,control } from 'openlayers';
import {SelectItem} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import * as shp from 'shpjs';
import * as tj from '@mapbox/togeojson';
import KML from 'ol/format/KML.js';





@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})


export class MapComponent implements OnInit {
  @Output() getPolygons = new EventEmitter();
  @Output() getPoints = new EventEmitter();
  @Output() drawFinished = new EventEmitter();
  @ViewChild('map') map: any;
  @ViewChild('drawLayerSource') source:any;
  // @ViewChild('osm') osm: any;
  // @ViewChild('digitalglobe') digitalglobe: any;
  // @ViewChild('planet') planet: any;
  // @ViewChild('rapideye') rapideye: any;
  @Input() data: any[] = [];
  @Input() propertyData: any[] = [];
  @Input() pointData: any[] = [];
  @Input() tabType: string;
  @Input() iconUrl: string =  '/assets/map-imoveis.png';
  @Input() imoveis:boolean = true;
  @Input() matricula:boolean = true;
  @Input() garantias:boolean = true;
  @Input() operacoes:boolean = true;
  @Input() pointDataImoveis: any[] = [];
  @Input() dataImoveis: any[] = [];
  @Input() pointDataMatricula: any[] = [];
  @Input() dataMatricula: any[] = [];
  @Input() pointDataOperacoes: any[] = [];
  @Input() dataOperacoes: any[] = [];
  @Input() pointDataGarantia: any[] = [];
  @Input() dataGarantia: any[] = [];
  @Input() editable:boolean = false;
  @Input() latitude:number = -23.5961919059399;
  @Input() longitude:number = -46.4654906201793;
  @Input() height:string = "517px";
  @Input() isClient:boolean = false;

  // val1: string;
  pointShape:any[] = [];
  polygonShape:any[] = [];
  pointKml:any[] = [];
  polygonKml:any[] = [];
  showLayer: boolean;
  displayDialog: boolean;
  uploadedFiles: any[] = [];
  filesUploaded: any[] = [];
  zoom:number = 8;
  draw:boolean = false;
  pointer:boolean = false;
  coordinates: any[] = [];
  propertyColor:any[] =[158, 158, 158, 0.7];
  registryColor:any[] = [136, 221, 24, 0.7];
  guaranteeColor:any[] = [255, 173, 7, 0.7];
  operationColor:any[] = [121, 85, 72, 0.7];

  layers: SelectItem[] = [
      {label:'Selecione a visualização', value:null},
      {label:'Open street map', value:{id:'osm'}},
      {label:'Digital globe', value:{id:'digitalglobe'}},
      {label:'Planet', value:{id:'planet'}},
      {label:'Rapid eye', value:{id:'rapideye'}}
    ];
  osmVisibility:boolean = true;
  digitalVisibility:boolean = false;
  planetVisibility:boolean = false;
  rapidVisibility:boolean = false;
  uploadedShapeFile: any;
  drawnPointCoordinates:any[] = [];
  drawnPolygonCoordinates:any[] = [];
  drawnModifiedCoordinates:any[] = [];
  visible:boolean = true;
  notVisible:boolean = false;
  externalCoordinates:any[]=[];
  propertyToSend:any[] = [];


  constructor(private route: ActivatedRoute,private http:HttpClient) {
  }


  ngOnInit() {
    this.zoom=9;
    console.log(this.dataImoveis);
    console.log(this.dataMatricula);
  }


  //*************************************************************************//
  // Button functions are in order that they appear
  //Change layer is the function for the layers options
  // Shape file upload calls a helper function to render the shapefile
  // Kml file uplaod extracts polygons and markers from a kml file that was transformed to string

  //************************************************************************//

  ableChangeLayer() {
    if(this.showLayer) {
      this.showLayer=false;
    } else {
      this.showLayer=true;

    }
  }

  changeLayer(e){
    let visible = true;
    let notVisible = false;

    this.osmVisibility = notVisible;
    this.digitalVisibility= notVisible;
    this.planetVisibility = notVisible;
    this.rapidVisibility = notVisible;

    switch(e.value.id){
      case 'osm':
        this.osmVisibility = visible;
        break;
      case 'digitalglobe':
        this.digitalVisibility= visible;
        break;
      case 'planet':
        this.planetVisibility = visible;
        break;
      case 'rapideye':
        this.rapidVisibility = visible;
        break;
    }
  }
  openLayer(){
    this.changeLayer("osm");
  }
  digitalLayer(){
    this.changeLayer("digitalglobe");
  }
  planetLayer(){
    this.changeLayer("planet");
  }
  rapidLayer(){
    this.changeLayer("rapideye");
  }

  toggleDraw(){
    this.draw = !this.draw;
  }

  toggleMarking(){
    this.pointer = !this.pointer
  }

  resetToSomewhere(x,y){
    this.goTo(x,y);
  //   console.log('chegou');
  //   console.log(x);
  //   console.log(y);
  //   let rightCoords = proj.transform([x,y],"EPSG:4326", "EPSG:3857");
  //   console.log(rightCoords);
  //   this.zoom = 16;
  //   this.map.instance.getView().setCenter([rightCoords[0],rightCoords[1]]);
  }
  goTo(x,y){
    let rightCoords = proj.transform([x,y],"EPSG:4326", "EPSG:3857");
    //this.zoom = 16;
    this.map.instance.getView().setCenter([rightCoords[0],rightCoords[1]]);
  }

  mapOnClick(e){
    const map = e.map;
    // this bit checks if user clicked on a feature
    const point = map.forEachFeatureAtPixel(e.pixel,
      function(feature, layer) {
        return feature;
      }
    );
    if(point){
      this.zoom = 12;
      //this.goTo(e.pixel[1],e.pixel[0]);
      this.map.instance.getView().setCenter(e.coordinate);
      this.updateSize();
    }
    //console.log(point.getProperties().geometry.d);
  }

  resetToPolygonSide(tabMapData:any){
    // console.log(this.imoveis);
    console.log('chegoy aqui');
    console.log(tabMapData);
    // this.map.instance.renderSync();
    // this.map.instance.render();
    // this.map.instance.updateSize();
    // this.map.instance.removeLayer()
    // console.log(this.map.instance.removeLayer());
    // let rightCoords = proj.transform([tabMapData.coordinates[0][0],tabMapData.coordinates[0][1]],"EPSG:4326", "EPSG:3857");
    if(tabMapData.type==='property'){
      console.log('entrou');
      this.dataImoveis = tabMapData.coordinates;
      console.log(this.dataImoveis);
    }
    else if(tabMapData.type=='registry'){
      console.log('aqui');
      this.dataMatricula = tabMapData.coordinates;
      console.log(this.dataMatricula);
    }else if(tabMapData.type=='guarantee'){
      this.dataGarantia = tabMapData.coordinates;
    }
    this.zoom = 15;
    console.log(this.map);
    let toCenter = this.getCenter(tabMapData.coordinates);
    this.getCorrectZoom(tabMapData.coordinates);
    let rightCoords = proj.transform([toCenter[0],toCenter[1]],"EPSG:4326", "EPSG:3857");
    this.map.instance.getView().setCenter([rightCoords[0],rightCoords[1]]);
  }

  updateSize() {
    setTimeout(()=>{
      this.map.instance.updateSize();
    }, 100);
  }

  resetToCenter(){
    let rightCoords = proj.transform([this.latitude,this.longitude],"EPSG:4326", "EPSG:3857");
    this.zoom=16;
    this.map.instance.getView().setCenter([rightCoords[0],rightCoords[1]]);
    console.log(this.dataImoveis);
  }

  increaseZoom() {
    this.zoom  = Math.min(this.zoom + 1, 18);
  }

  decreaseZoom() {
    this.zoom  = Math.max(this.zoom - 1, 1);
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  displayShape(event){
    if(event[0].type ==="Point")
      this.pointShape = event[0].coords;
    else
      this.polygonShape = event[0].coords;
    this.externalCoordinates.push(event[0].coords);
    this.getPolygons.emit(this.externalCoordinates);
  }

  displayKml(event){
    this.pointKml = event[0].point;
    this.polygonKml = event[0].polygon;
    console.log(this.polygonKml);
    let toTransform = this.getCenter(this.polygonKml);
    this.getCorrectZoom(this.polygonKml);
    console.log(toTransform);
    let coords = this.polygonKml[0][0];
    let rightCoords = proj.transform([toTransform[0],toTransform[1]],"EPSG:4326", "EPSG:3857");
    this.zoom=15;
    this.map.instance.getView().setCenter([rightCoords[0],rightCoords[1]]);
    // this.polygonKml = [[[0,0],[-20,-20],[20,20],[50,50],[0,0]],[[-10,-10],[-12,-12],[-15,15],[-20,20],[-10,-10]]];
    // console.log(this.polygonKml);
    this.externalCoordinates.push(this.pointKml);
    this.externalCoordinates.push(this.polygonKml);
    this.getPolygons.emit(this.externalCoordinates);
  }


  getCenter(polygon:any[]){
    let x= 0;
    let y= 0;
    let z = 0;
    let total = 0
    polygon.forEach(p=>{
        p.forEach(pp=>{
          let lat =pp[1]*Math.PI/180;
          let long = pp[0]*Math.PI/180;
          x+=Math.cos(lat)*Math.cos(long);
          y+=Math.cos(lat)*Math.sin(long);
          z+=Math.sin(lat);
          total+=1;

        })

    })
    x = x/total;
    y = y/total;
    z = z/total;
    let centralLong = Math.atan2(y,x);
    let centralSqrt = Math.sqrt(x*x+y*y);
    let centralLat = Math.atan2(z,centralSqrt);
    let finalLong = centralLong *180/Math.PI;
    let finalLat  = centralLat*180/Math.PI;
    return [finalLong,finalLat];
  }

  getCorrectZoom(polygon:any[]){
    let perimeter = 0;
    let distance = 0;
    
    polygon.forEach(p=>{
       for(let i=1;i<(p.length);i++){
         console.log(p[i-1][1]);
         console.log(p[i][1]);
         distance = 6376*(Math.acos(Math.sin(p[i-1][1]/58)*Math.sin(p[i][1]/58)+Math.cos(p[i-1][0]/58)*Math.cos(p[i][0]/58)*Math.cos(p[i][0]/58-p[i-1][0]/58)));
         // console.log(distance);
         perimeter+=distance;
        
     }
    })
    console.log(perimeter);
  }

// 241404.02498614503 = 15
// 55474.37339716051 =12


  endDrawing(event){
    let coordinates = event.getGeometry().getCoordinates();
    console.log(event.getGeometry().getInteriorPoint()) ;
    console.log(coordinates);
    let coord = [];
    for(let i=0;i<coordinates[0].length;i++){
      console.log(proj.transform(coordinates[0][i],'EPSG:3857','EPSG:4326'));
      coord.push(proj.transform(coordinates[0][i],'EPSG:3857','EPSG:4326'));
    }
    console.log(coord);
    this.externalCoordinates.push(coord);
    this.propertyToSend.push({type:'Polygon',coordinates:coord});
    this.getPolygons.emit(this.propertyToSend);
    this.drawFinished.emit(this.propertyToSend);
    console.log(this.propertyToSend);

  }
  //
  endMarking(event){
    console.log(event);
    let coordinates  = event.getGeometry().getCoordinates();
    let coord = proj.transform(coordinates,'EPSG:3857','EPSG:4326');
    console.log(coordinates);
    console.log(coord);
    this.externalCoordinates.push(coord);
    this.propertyToSend.push({type:'Point', coordinates:coord});
    this.getPolygons.emit(this.propertyToSend);
    this.drawFinished.emit(this.propertyToSend);
    console.log(this.propertyToSend);

  }

  endModify(event){
    this.propertyToSend = [];
    let features = this.source.instance.getFeatures();
    features.forEach((feature)=>{
      if(feature.getGeometryName()==='drawn'){
        let type = feature.getGeometry().getType();
        if(type==="Point"){
          // console.log(feature.getGeometry().getCoordinates());
          let coord = proj.transform(feature.getGeometry().getCoordinates(),'EPSG:3857','EPSG:4326');
          this.propertyToSend.push({type:'Point', coordinates:coord});
        }
        else{
          let coord = [];
          // console.log(feature.getGeometry().getCoordinates());
          feature.getGeometry().getCoordinates().forEach((coordinates)=>{
            // console.log(coordinates);
            coordinates.forEach((coords)=>{
              coord.push(proj.transform(coords,'EPSG:3857','EPSG:4326'));
            })
            this.propertyToSend.push({type:'Polygon', coordinates:coord})

          })

        }
        console.log(this.propertyToSend);
        // console.log(feature.getGeometry().getType());
        // console.log(feature.getGeometry().getCoordinates());
        // console.log(feature.getGeometry().getCoordinates()[0]);
      }
      this.getPolygons.emit(this.propertyToSend);
      this.drawFinished.emit(this.propertyToSend);
    })
  }
}
