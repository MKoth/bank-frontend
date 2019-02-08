import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatriculaService } from "../matricula.service";
import { ExcelService } from "./../../services/excel.service";
import { Client, Revision, PropertyExport, Property, RegistryExport} from "./../../core/models";

@Component({
  selector: 'app-matriculatable',
  templateUrl: './matriculatable.component.html',
  styleUrls: ['./matriculatable.component.scss']
})
export class MatriculatableComponent implements OnInit {
  @Input() revisions: Array<Revision>=new Array<Revision>();

  constructor(private excelService: ExcelService, private router: Router,
    private route: ActivatedRoute, private propserv: MatriculaService) {}

  selectRowindex: any;
  item: any;

  onoff: boolean;

  ngOnInit() {
    this.onoff = true;
  }

  ngDoCheck() {
    
    if(this.revisions.length > 0 && this.onoff == true){
      this.onoff = false;      
    }

}

exportAsXLSX(): void {
  let registryExport: Array<RegistryExport> = new Array<RegistryExport>();
  let cList = <Array<Revision>>this.revisions;
  cList.forEach(e => {
    var registry : RegistryExport = {
      "Codigo": e.registry.id,
      "Estado": e.registry.uf,   
      "Area": e.registry.area, 
      "Situacao": e.status
    };
    registryExport.push(registry);
  });
  this.excelService.exportAsExcelFile(registryExport, 'Matriculas');
}

getMatricula(id: number) {
  this.router.navigate(["/matricula", id]);
}

}