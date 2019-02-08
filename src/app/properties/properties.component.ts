import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RevisionService } from "../services/revision.service";
import { Revision } from "../core/models";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})

export class PropertiesComponent implements OnInit {
  ready = false;
  revision: Revision = new Revision();
  revisionLoaded: Promise<boolean>;

  @ViewChild('details') details:any;
  map:any;
  coordinates:any;

  constructor(
    private route: ActivatedRoute,
    private revisionService: RevisionService
  ) {}

  ngOnInit() {
    const tid = this.route.snapshot.params["tid"];
    this.revisionService.getById(tid).then((data:Revision) => {
      this.revision = data;
      this.ready=true;
    });
  }

  ngAfterViewChecked(): void {
    this.map = this.details.map;
  }

  updateMap(e){
    this.map.resetToPolygonSide(e);
  }

  getPolygon(e){
    this.coordinates = JSON.stringify(e[0]);
    this.revisionLoaded = Promise.resolve(true);
  }

  centerToPolygon(e){
    this.map.resetToPolygonSide(e);
    window.scroll(0,0);
  }

}
