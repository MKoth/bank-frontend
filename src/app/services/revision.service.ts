import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { AudsatHttp } from "./../services/audsat-http";
import { Revision } from "../core/models";

@Injectable({
  providedIn: 'root'
})
export class RevisionService {

  constructor(private http: AudsatHttp) { }

  getById(tid: number) {
    return this.http
      .get(`${environment.apiUrl}/thing/` + tid)
      .then((response: any) => { return <Revision>response });
  }

  getByKey(type: string, key: any) {
    return this.http
      .get(`${environment.apiUrl}/`+type+`/` + key,{NotFoundErrorMsg: null})
      .then((response: any) => { return <Revision>response });
  }

  create(revision: any) {
    return this.http
      .post(`${environment.apiUrl}/revision`, revision);
  }
  
  attach(id1:number , id2:number){
    let data ={
      relation:"No relation"
    }
    return this.http
    .post(`${environment.apiUrl}/relation/`+id1+`/`+id2, data);
  }

  attachCreate(revision: any, pid:number,relation:string){
    if(relation==null){
      relation = "not";
    }
    return this.http
      .post(`${environment.apiUrl}/revision/relatedTo/`+pid+`/`+relation, revision);
  }

  getRelatedRevisions(revisionId: any, type:string){
    return this.http
      .get(`${environment.apiUrl}/`+type+`/relatedTo/`+revisionId);
  }

  getRevision(rid: any) {
    return this.http
    .get(`${environment.apiUrl}/revision/` + rid);
  }

  saveWizard(mainType:string, clientRevision:any, propertyRevision:any, registryRevision:any, operationRevision:any,  guaranteeRevision:any, propertyClientRelationType:string, clientGuaranteeRevision?:any, propertyGuaranteeRevision?:any, registryGuaranteeRevision?:any){
    let data = {
      client: clientRevision,
      property: propertyRevision,
      registry: registryRevision,
      operation: operationRevision,
      guarantee: guaranteeRevision,
      propertyClientRelationType: propertyClientRelationType,
      // clientGuarantee: clientGuaranteeRevision,
      propertyGuarantee: propertyGuaranteeRevision,
      registryGuarantee: registryGuaranteeRevision
    };
    return this.http
      .post(`${environment.apiUrl}/revision/wizard/`+mainType, data);
  }

  downloadFile(revisionId:number, documentId:number){
    return this.http
      .rawGet(`${environment.apiUrl}/revision/`+revisionId+`/document/`+documentId);
  }


  // REMOVE those aliases someday:
  register(revision: any) {
    return this.create(revision);
  }
  save(revision: any) {
    return this.create(revision);
  }
  
}
