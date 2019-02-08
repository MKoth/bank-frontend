import { Injectable } from "@angular/core";
// import { HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Client, Revision, Guarantee } from "../core/models";
import { AudsatHttp } from "../services/audsat-http";
import { RevisionService } from "../services/revision.service";
import { PanelMenu } from "primeng/primeng";
import { parse_date_code } from "ssf/types";
import { NgForm } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: "root"
})
export class GarantiasService {
  constructor(
    private http: AudsatHttp,
    private revisionService: RevisionService
  ) {}

  getFilter(garantiasSearch:any): Promise<any> {
    // let data = {
        //  car : garantias.car,
        //  complement: garantias.complement,
        //  inclusiondate1: garantias.datacadastroinicio,
        //  inclusiondate2: garantias.datacadastrofim,
        //  valuationstatusdate1: garantias.dataaprovacaoinicio,
        //  valuationstatusdate2: garantias.dataaprovacaofim,
        //  name: garantias.name,
        //  status: garantias.status,
        //  cpf: garantias.cpf,
        //  code: garantias.code
    // }
    //"{"id":6,"createdAt":"2018-11-26T16:24:19.314+0000","updatedAt":"2018-11-26T16:24:19.314+0000","token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmFsaXN0YUB3ZW1pbmQuY29tLmJyIiwiZXhwIjoxNTQ0MTEzNDU2fQ.ptmHyx-nZ2Dz-QXbr2UvDZNm3tbEfuqRviI3HZ_YGg8ggtb2uoQ48Xxn7ZWQrVtVE7WqoIeApIq-bmM4WQDMgQ","expirationDate":1544113456000,"user":{"id":1,"createdAt":"2018-11-26T13:11:00.916+0000","updatedAt":"2018-11-26T13:11:00.916+0000","email":"analista@wemind.com.br","hash_foto":null,"revisions":null,"userId":0},"permissions":{"2":100,"3":101,"4":102},"unitsWrite":[{"unitId":2,"createdAt":null,"updatedAt":null,"unitLabel":"wemind"},{"unitId":3,"createdAt":null,"updatedAt":null,"unitLabel":"regional sudeste"}],"unitsRead":[{"unitId":2,"createdAt":null,"updatedAt":"2018-11-26T16:24:19.465+0000","unitLabel":"wemind"},{"unitId":3,"createdAt":null,"updatedAt":"2018-11-26T16:24:19.467+0000","unitLabel":"regional sudeste"},{"unitId":4,"createdAt":null,"updatedAt":"2018-11-26T16:24:19.469+0000","unitLabel":"agência sp"}]}"
    return this.http
      .post<any>(`${environment.apiUrl}/guaranties`, JSON.stringify(garantiasSearch))
      .then((response: any) => { return <Array<any>>response });
  }

  getById(tid: number) {
    return this.http
      .get(`${environment.apiUrl}/thing/` + tid)
      .then((response: any) => { return <Revision>response });
  }

  getByName(name: string) {
    return this.http
    .get(`${environment.apiUrl}/guarantee/` + name);
  }

  hasOperation(name: string) {
    return this.http
    .get(`${environment.apiUrl}/guarantee/hasOperation/` + name);
  }

  saveWizard(clientRevision:any, registryRevision:any, propertyRevision:any, guaranteeRevision:any, fromType:any){
    // if(fromType=="client")
    //   return this.revisionService.saveWizard("guarantee", clientRevision,propertyRevision,registryRevision, null, null, null,guaranteeRevision, null, null);
    // if(fromType=="property")
    //   return this.revisionService.saveWizard("guarantee", clientRevision,propertyRevision,registryRevision, null, null, null,null,guaranteeRevision, null);
    // if(fromType=="registry")
    //   return this.revisionService.saveWizard("guarantee", clientRevision,propertyRevision,registryRevision, null, null, null,null,null,guaranteeRevision);
    // if(fromType=="guarantee")
      return this.revisionService.saveWizard("guarantee", clientRevision,propertyRevision,registryRevision, null, guaranteeRevision, null,null,null);
  }
}
