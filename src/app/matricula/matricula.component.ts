import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RevisionService } from "../services/revision.service";
import { Revision } from "./../core/models";
import { MenuItem } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
import { MapComponent } from '../core/map/map.component';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.scss'],
})
export class MatriculaComponent implements OnInit {
  ready: boolean = false;
  revision: Revision;

  @ViewChild('details') details;
  map:any;
  coordinates:any;
  revisionLoaded: Promise<boolean>;

  constructor(
    private route: ActivatedRoute,
    private revisionService: RevisionService
  ) {}

  ngOnInit() {
    // console.log(this.details);
    const tid = this.route.snapshot.params["tid"];
    this.revisionService.getById(tid).then(data => {
      this.revision = data;
      this.ready = true;
    });
  }

//  ngAfterViewInit(): void {
//     this.map = this.details.map;
//   }

  updateMap(e){
    this.map = this.details.map;
    this.map.resetToPolygonSide(e);
  }

   getPolygon(e){
    this.coordinates = JSON.stringify(e[0]);
    this.revisionLoaded = Promise.resolve(true);
  }

  centerToPolygon(e){
    console.log('enviando');
    this.map.resetToPolygonSide(e);
    window.scroll(0,0);

  }

}
