import { Component, OnInit, Input } from '@angular/core';
import { MatriculaService } from "../matricula.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-matricularsadetails',
  templateUrl: './matricularsadetails.component.html',
  styles: []
})
export class MatricularsadetailsComponent implements OnInit {
  @Input() revisions: any;
  constructor(private route: ActivatedRoute, private cserv: MatriculaService) { }

  ngOnInit() {
  }

}
