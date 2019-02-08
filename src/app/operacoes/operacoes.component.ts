import { RevisionService } from './../services/revision.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Revision } from "./../core/models";
import { MenuItem } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class OperacoesComponent implements OnInit {
  revision: Revision;
  ready:boolean = false;
  @ViewChild('details') details:any;
  map:any;

  clients:any;

  constructor(private route: ActivatedRoute,
    private revisionService: RevisionService) {}

  ngOnInit() {
    const tid = this.route.snapshot.params["tid"];
    console.log(tid);
    this.revisionService.getById(tid).then((data:any) => {
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
