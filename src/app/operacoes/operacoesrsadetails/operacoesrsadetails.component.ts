import { Component, OnInit, Input } from '@angular/core';
import { OperacoesService } from "../operacoes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-operacoesrsadetails',
  templateUrl: './operacoesrsadetails.component.html',
  styles: []
})
export class OperacoesrsadetailsComponent implements OnInit {
  @Input() revisions: any;
  constructor(private route: ActivatedRoute, private cserv: OperacoesService) { }

  ngOnInit() {
  }

}
