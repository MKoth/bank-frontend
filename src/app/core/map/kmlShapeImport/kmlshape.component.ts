import { Component, OnInit, ViewChild, Output,EventEmitter,ElementRef,ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MapEvent, proj,interaction,control } from 'openlayers';
import {SelectItem} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import * as shp from 'shpjs';
import * as tj from '@mapbox/togeojson';
import KML from 'ol/format/KML.js';


@Component({
  selector: "app-kmlshape",
  templateUrl: "./kmlshape.component.html",
  styleUrls: ["./kmlshape.component.css"],
   encapsulation: ViewEncapsulation.None
})

export class KmlShapeComponent implements OnInit {
  @Output() shapeExternal = new EventEmitter();
  @Output() kmlExternal = new EventEmitter();
  pointShape:any[] = [];
  polygonShape:any[] = [];
  pointKml:any[] = [];
  polygonKml:any[] = [];
  fullShape:any[] = [];
  fullKml:any[] = [];
  uploadedShapeFile: any;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

  }


    shapeFileUpload(event){
      console.log('Aqui');
      console.log(event);

      this.getFile(event);

    }

    //Checar logica

    getFile(event){
      this.pointShape = [];
      this.polygonShape = [];
      let dataInside = [];
      let toReturn:any;
      let reader = new FileReader();
      reader.readAsArrayBuffer(event.files[0]);
      reader.onload = (e) => {
        this.uploadedShapeFile = reader.result;
        shp(this.uploadedShapeFile).then((geojson) => {
          toReturn = geojson;
          if(geojson.features[0].geometry.type==='Point'){
            geojson.features.forEach((o) =>{
              this.pointShape.push(o.geometry.coordinates);
            });

            this.fullShape = [{type:'Point',coords:this.pointShape}];
          }
          else{
            geojson.features.forEach((o) =>{
              this.polygonShape.push(o.geometry.coordinates);
            });
            this.fullShape = [{type:'Polygon',coords:this.pointShape}];
          }

          this.shapeExternal.emit(this.fullShape);

        }).catch(err => {
          console.log(err);
        });

      }

          }





    kmlFileUpload(event){
        console.log(event);
        this.pointKml = [];
        this.polygonKml = [];
        let file = event.files[0];
        let reader = new FileReader();
        reader.onload = async (e: any) => {
        console.log(e);

        let result = await this.extractGoogleCoords(e.target.result);
        console.log(result);
        result.markers.forEach((r)=>{
            console.log(r);
            this.pointKml.push(r);

        })
        result.polygons.forEach((r)=>{
          this.polygonKml.push(r);
        })
        this.fullKml = [{point:this.pointKml,polygon:this.polygonKml}];
        this.kmlExternal.emit(this.fullKml)
      }
      reader.readAsText(file);
    }

    async extractGoogleCoords(plainText) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(plainText, "text/xml");
      let googlePolygons = [];
      let googleMarkers = [];



        for (const item of xmlDoc.getElementsByTagName('Placemark') as any) {
          console.log('aqui');
          // let placeMarkName = item.getElementsByTagName('name')[0].childNodes[0].nodeValue.trim();
          let polygons = item.getElementsByTagName('Polygon');
          let markers = item.getElementsByTagName('Point');
          console.log(polygons);
          /** POLYGONS PARSE **/
          for (const polygon of polygons) {
            let coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
            let points = coords.split(" ");

            let googlePolygonsPaths = [];
            for (const point of points) {
              let coord = point.split(",");
              googlePolygonsPaths.push([parseFloat(coord[0]),parseFloat(coord[1])]);
            }
            googlePolygons.push(googlePolygonsPaths);
          }

          /** MARKER PARSE **/
          for (const marker of markers) {
            var coords = marker.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
            let coord = coords.split(",");
            googleMarkers.push([parseFloat(coord[0]),parseFloat(coord[1])]);
          }
        }


      return { markers: googleMarkers, polygons: googlePolygons };

    }
  }
