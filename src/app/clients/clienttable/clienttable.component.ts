import { Component, OnInit, Input ,Pipe, PipeTransform, AfterContentChecked, AfterContentInit, DoCheck} from '@angular/core';
import { Client, Revision, ClientExport } from "./../../core/models";
import { ExcelService } from "./../../services/excel.service";
import { UnitService } from "./../../services/unit.service"
import { Router } from '@angular/router';
import { nodeChildrenAsMap } from '@angular/router/src/utils/tree';


@Component({
  selector: 'app-clienttable',
  templateUrl: './clienttable.component.html',
  styleUrls: ['./clienttable.component.css']
})
export class ClienttableComponent implements DoCheck {
  @Input() revisions: Array<Revision>=new Array<Revision>();

  onoff: boolean;

  constructor(private excelService: ExcelService, private router: Router, private unitservice: UnitService) { 
  }

  noClient: boolean;
  unitsvector: any[] = [];

  ngOnInit() {
    this.onoff = true;
  }

  ngDoCheck() {
    if(this.revisions.length>0 && this.onoff == true){
      this.unitsvector = this.unitservice.unitsShow(this.revisions);
    }
}


  
  exportAsXLSX(): void {
    let clientsExport: Array<ClientExport> = new Array<ClientExport>();
    let cList = <Array<Revision>>this.revisions;
    console.log(cList);
    cList.forEach(e => {
      console.log(e);
      var cliente : ClientExport = {
        "ID":e.id,
        "Nome":e.client.name,
        "CPF_CNPJ":e.client.cpfcnpj,
        "Email":e.client.email,
        "Situação":e.status,
        "Telefone":e.client.phoneNumber,
        "Celular":e.client.cellPhone,
        "Agência":"",
        "Atenções":e.client.attentionsCounter,
        "Alertas":e.client.alertsCounter
      };
      clientsExport.push(cliente);
    });
    console.log(clientsExport);
    this.excelService.exportAsExcelFile(clientsExport, 'clientes');
 }
 getUser(id: number){
   this.router.navigate(["/cliente", id]);
 }
}
