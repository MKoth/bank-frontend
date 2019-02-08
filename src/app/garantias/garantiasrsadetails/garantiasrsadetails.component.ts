import { Component, OnInit, Input } from '@angular/core';
import { GarantiasService } from "../garantias.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-garantiasrsadetails',
  templateUrl: './garantiasrsadetails.component.html',
  styles: []
})
export class GarantiasrsadetailsComponent implements OnInit {
  @Input() revisions: any;
  constructor(private route: ActivatedRoute, private cserv: GarantiasService) { }

  ngOnInit() {
  }

}
