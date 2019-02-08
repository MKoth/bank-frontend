import { MessageService } from 'primeng/components/common/api';
import { MapComponent } from './../core/map/map.component';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GarantiasService } from "./garantias.service";
import { RevisionService } from '../services/revision.service';
import { Revision } from "./../core/models";
import { MenuItem } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-garantias',
  templateUrl: './garantias.component.html',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class GarantiasComponent implements OnInit {
  ready: boolean = false;
  revision: Revision;
  
  @ViewChild('details') details:any;
  map:any;

  operations = {
    name: "Operação",
    car: "UF135T4A8d6K4",
    totalfarea: "19560ha",
    glebenumber: "1",
    totalarea: "20660ha",
    totalncarea: "11100ha"
  };
  constructor( private messageService: MessageService,
    private route: ActivatedRoute,
    private revisionService: RevisionService
  ) {}

  ngOnInit() {
    const tid = this.route.snapshot.params["tid"];
    this.revisionService.getById(tid).then(data => {
      this.revision = data;
      this.ready=true;
    });
  }

  ngAfterViewInit(): void {
    this.map = this.details.map;
  }

  updateMap(e){
    this.map = this.details.map;
    this.map.resetToPolygonSide(e);
  }

  centerToPolygon(e){
    console.log('enviando');
    this.map.resetToPolygonSide(e);
    window.scroll(0,0);

  }
}
