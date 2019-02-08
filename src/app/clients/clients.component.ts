import { RsaService } from './../services/rsa.service';
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RevisionService } from "../services/revision.service";
import { Revision } from "../core/models";
// import { MapComponent } from '../core/map/map.component';

@Component({
  selector: "app-clients",
  templateUrl: "/clients.component.html",
  styleUrls: ["./clients.component.scss"]
})

export class ClientsComponent implements OnInit {
  ready: boolean = false;
  revision: Revision;
  revisionLoaded: Promise<boolean>;

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

  constructor(
    private route: ActivatedRoute,
    private rsaService: RsaService,
    private revisionService:RevisionService
  ) {}

  ngOnInit() {
    const tid = this.route.snapshot.params["tid"];
    this.revisionService.getById(tid).then(revision => {
      this.revision = revision;
      this.ready = true;
      this.revisionLoaded = Promise.resolve(true);

    });
    console.log(this.details);
  }

  ngAfterViewChecked(): void {
    // console.log(this.details);
    this.map = this.details.map;
  }

  updateMap(e){
    // this.map = this.details.map;
    this.map.resetToPolygonSide(e);
  }

  centerToPolygon(e){
    console.log('enviando');
    this.map.resetToPolygonSide(e);
    window.scroll(0,0);

  }

}
