import { operationsRevisionSkel } from './../core/models';
import { Injectable } from "@angular/core";
// import { HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
// import { Client, Revision, Property } from "../core/models";
import { AudsatHttp } from "./../services/audsat-http";
import { RevisionService } from "./../services/revision.service";
import { SecurityService } from "./../security/security.service";
// import { PanelMenu } from "primeng/primeng";
// import { parse_date_code } from "ssf/types";
// import { NgForm } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class OperacoesService {
  constructor(private http: AudsatHttp, private auth: SecurityService, private revisionService: RevisionService) {}


  getFilter(operationSearch:any): Promise<any> {
    return this.http
    .post<any>(`${environment.apiUrl}/operations`, JSON.stringify(operationSearch))
    .then((response: any) => { return <Array<any>>response });
  }

  getByCode(code:string){
    return this.revisionService.getByKey("operation",code);
  }

  saveWizard(clientRevision:any, propertyRevision:any, operationRevision:any, guaranteeRevision:any, propertyClientRelationType:string){
    return this.revisionService.saveWizard(
      "operation",
      clientRevision,
      propertyRevision,
      null,
      operationRevision,
      guaranteeRevision,
      propertyClientRelationType
    );
  }

   saveWizardTemp(glebas:any,clientRevision:any, propertyRevision:any, operationRevision:any, guaranteeRevision:any, propertyClientRelationType:string){
    return this.revisionService.saveWizard(
      "operation",
      glebas,
      clientRevision,
      propertyRevision,
      null,
      operationRevision,
      guaranteeRevision,
      propertyClientRelationType
    );
  }

  attach(id1:number , id2:number){
    let data ={
      relation:"No relation"
    }
    return this.http
    .post(`${environment.apiUrl}/relation/`+id1+`/`+id2, data);
  }
  
  getConnectedRevisions(type:string, revisionId:number){
    return this.http
    .get(`${environment.apiUrl}/`+type+`/relatedTo/`+revisionId);
  }
}
