import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GarantiasService } from "../garantias.service";
import { ExcelService } from "./../../services/excel.service";
import { Client, Revision, Guarantee, GuaranteeExport} from "./../../core/models";

@Component({
  selector: 'app-garantiastable',
  templateUrl: './garantiastable.component.html'
})
export class GarantiastableComponent implements OnInit {
  @Input() revisions: Revision [];

  constructor(private excelService: ExcelService, private router: Router,
    private route: ActivatedRoute, private wserv: GarantiasService) {}

  selectRowindex: any;
  item: any;
  unitsvector = [];
  

  ngOnInit() {
    // let ts = new Date(123213123);
    // let data = ts.toLocaleDateString();
    // console.log(data);
    // this.propserv.getById(342);
    
  }

  delet(x:any){
 
    // console.log(x)
    //  this.data = this.data.filter((val, i) => i !== x);
 }

 exportAsXLSX(): void {
  let guaranteeExport: Array<GuaranteeExport> = new Array<GuaranteeExport>();
  let gList = <Array<Revision>>this.revisions;
  gList.forEach(e => {
    let guarantee: GuaranteeExport = {
       "Nome_da_Garantia": e.guarantee.name,
       "Valor":e.guarantee.value,
       "ID":e.guarantee.id,
       "Tipo":e.guarantee.guaranteeType,
       "Outros":e.guarantee.otherType,
       "Data_de_Cadastro":e.guarantee.createdAt,
       "Vigência_Inicial":e.guarantee.timeSpanFinal,
       "Vigência_Final":e.guarantee.timeSpanInitial
    };
    guaranteeExport.push(guarantee);
  });
  this.excelService.exportAsExcelFile(guaranteeExport, 'Guarantee');
}

  getGarantia(id: number){
    this.router.navigate(["/garantia", id]);
  }
}