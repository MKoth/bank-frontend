import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { PropertiesService } from "../properties.service";
import { ExcelService } from "./../../services/excel.service";
import { Client, Revision, PropertyExport, Property } from "./../../core/models";
import { UnitService } from "./../../services/unit.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-propertytable',
  templateUrl: './propertytable.component.html',
  styleUrls: ['./propertytable.component.scss']
})
export class PropertytableComponent implements OnInit {
  @Input() searchForm:NgForm ;
  
  revisions: Revision[];
  totalRecords: number;

  constructor(
    private propertiesService: PropertiesService,
    private excelService: ExcelService,
    private router: Router,
    private unitservice: UnitService
  ) { }

  loading: boolean;
  item: any;
  unitsvector = [];

  dataModel = {
    'data': this.searchForm,
    'page': 0
  }

  ngOnInit() {
    this.loadRevisions(this.searchForm);
  }

  ngDoCheck() {
    if(this.searchForm.value != null)
      this.loadRevisions(this.searchForm)
    if(this.revisions && this.revisions.length>0){
      this.unitsvector = this.unitservice.unitsShow(this.revisions)
    }
  }

  exportAsXLSX(): void {
    let propertyExport: Array<PropertyExport> = new Array<PropertyExport>();
    let pList = <Array<Revision>>this.revisions;
    pList.forEach(e => {
      console.log(e);
      var property: PropertyExport = {
        "Codigo": e.property.code,
        "CPF_CNPJ": "",
        "Complemento": e.property.complement,
        "Area": e.property.area,
        "Ponto_Atendimento": e.units,
        "Data_Cadastro": e.property.createdAt,
        "CAR": e.property.car,
        "Situacao": e.status
      };
      propertyExport.push(property);
    });
    console.log(propertyExport);
    this.excelService.exportAsExcelFile(propertyExport, 'Imoveis');
  }

  goTo(id: number) {
    this.router.navigate(["/imovel", id]);
  }

loadRevisions(event) {
  this.loading = true;
  this.dataModel.page = event.first/10;

  this.propertiesService.getFilter(this.dataModel).then((data:any) => {
          this.revisions = data.revisions;
          this.totalRecords = data.numberOfRevisions;
          this.loading = false;
      },
      error => {
          this.loading = false;
      }
  );
}
}
