import { Injectable } from "@angular/core";
// import { HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Client, Revision, Property } from "../core/models";
import { AudsatHttp } from "./../services/audsat-http";
import { SecurityService } from "./../security/security.service";
import { PanelMenu } from "primeng/primeng";
import { parse_date_code } from "ssf/types";
import { NgForm } from '@angular/forms';

import {Observable, forkJoin} from "rxjs";
//import 'rxjs/add/observable/forkJoin';
// import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: "root"
})
export class PanelService {
  constructor(private http: AudsatHttp, private auth: SecurityService) {
  }

  getFilter(propertySearch:any): Observable<any[]> {
    // let data = {
    //  car : property.car,
    //  complement: property.complement,
    //  inclusiondate1: property.datacadastroinicio,
    //  inclusiondate2: property.datacadastrofim,
    //  valuationstatusdate1: property.dataaprovacaoinicio,
    //  valuationstatusdate2: property.dataaprovacaofim,
    //  name: property.name,
    //  status: property.status,
    //  cpf: property.cpf,
    //  code: property.code
    // }
    //"{"id":6,"createdAt":"2018-11-26T16:24:19.314+0000","updatedAt":"2018-11-26T16:24:19.314+0000","token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmFsaXN0YUB3ZW1pbmQuY29tLmJyIiwiZXhwIjoxNTQ0MTEzNDU2fQ.ptmHyx-nZ2Dz-QXbr2UvDZNm3tbEfuqRviI3HZ_YGg8ggtb2uoQ48Xxn7ZWQrVtVE7WqoIeApIq-bmM4WQDMgQ","expirationDate":1544113456000,"user":{"id":1,"createdAt":"2018-11-26T13:11:00.916+0000","updatedAt":"2018-11-26T13:11:00.916+0000","email":"analista@wemind.com.br","hash_foto":null,"revisions":null,"userId":0},"permissions":{"2":100,"3":101,"4":102},"unitsWrite":[{"unitId":2,"createdAt":null,"updatedAt":null,"unitLabel":"wemind"},{"unitId":3,"createdAt":null,"updatedAt":null,"unitLabel":"regional sudeste"}],"unitsRead":[{"unitId":2,"createdAt":null,"updatedAt":"2018-11-26T16:24:19.465+0000","unitLabel":"wemind"},{"unitId":3,"createdAt":null,"updatedAt":"2018-11-26T16:24:19.467+0000","unitLabel":"regional sudeste"},{"unitId":4,"createdAt":null,"updatedAt":"2018-11-26T16:24:19.469+0000","unitLabel":"agência sp"}]}"
    /*return this.http
    .post<any>(`${environment.apiUrl}/properties`, JSON.stringify(propertySearch))
    .then((response: any) => { return <Array<any>>response });*/

    /*return this.http
    .get<any>(`${environment.apiUrl}/registries`)
    .then((response: any) => { return <Array<any>>response });*/
    //revisions
    var requests = [];
    requests.push(this.getRevisionByType("clients").then(res=>{return res;}));
    requests.push(this.getRevisionByType("properties").then(res=>{return res;}));
    requests.push(this.getRevisionByType("guaranties").then(res=>{return res;}));
    requests.push(this.getRevisionByType("registries").then(res=>{return res;}));
    requests.push(this.getRevisionByType("operations").then(res=>{return res;}));



    /*return this.http
    .get<any>(`${environment.apiUrl}/revisions`)
    .then((response: any) => { return <Array<any>>response });*/
    return forkJoin(requests);
  }
  getRevisionByType(type:string){
    return this.http
      .post<any>(`${environment.apiUrl}/`+type, {});
  }

  getRelatedRevisionsFromArray(revisions:Revision[]): Observable<any[]>{
    var requests = [];
    revisions.forEach((revision)=>{
      if(revision.relations==null)
        revision.relations=[];
      requests.push(this.getConnectedRevisions("client", revision.id).then(res=>{revision.relations.push(res);return res}));
      requests.push(this.getConnectedRevisions("guarantee", revision.id).then(res=>{revision.relations.push(res);return res}));
      requests.push(this.getConnectedRevisions("operation", revision.id).then(res=>{revision.relations.push(res);return res}));
      requests.push(this.getConnectedRevisions("property", revision.id).then(res=>{revision.relations.push(res);return res}));
      requests.push(this.getConnectedRevisions("registry", revision.id).then(res=>{revision.relations.push(res);return res}));
    });
    return forkJoin(requests);
  }

  getById(tid: number) {
    return this.http
    .get(`${environment.apiUrl}/thing/` + tid)
    .then((response: any) => { return <Revision>response });
  }

  // getByCar(car: any) {
  //   this.http.setNotFoundErrorMsg(null);
  //   return this.http.get(`${environment.apiUrl}/property/` + car)
  //     .then(r => {
  //       this.http.setNotFoundErrorMsg(this.notFoundErrorMsg);
  //       return r;
  //     });
  // }

  // getByCpfcnpj(cpfcnpj: String) {
  //   console.log(cpfcnpj);
  //   return this.http
  //   .get(`${environment.apiUrl}/client/isRegistered/` + encodeURI(cpfcnpj));
  // }

  // attachCreate(revision: any, pid:number,relation:string){
  //   return this.http
  //   .post(`${environment.apiUrl}/revision/relatedTo/`+pid+`/`+relation, revision);
  // }

getConnectedRevisions(type:string, revisionId:number){
  return this.http
  .get(`${environment.apiUrl}/`+type+`/relatedTo/`+revisionId);
}

  // attach(idFrom:number,idTo:number, relation:string){
  //   return this.http
  //   .get(`${environment.apiUrl}/relation/`+idFrom+`/`+idTo+`/`+relation);
  // }

  // getUserbyId(uid: any) {
  //   return this.http
  //   .get(`${environment.apiUrl}/user/` + uid);
  // }
  // consultCar(car:any) {
  //   return this.http
  //   .get(`${environment.apiUrl}/rsa/demonstrativo/` + car);
  // }
  // consultCarPoligono(car:any) {
  //   return this.http
  //     .get(`${environment.apiUrl}/rsa/poligono/` + car);
  // }

  // update(revision: any) {
  //   return this.http
  //   .post(`${environment.apiUrl}/revision`, revision);
  // }

  // getRevision(rid: any) {
  //   return this.http
  //   .get(`${environment.apiUrl}/revision/` + rid);
  // }

  // saveWizard(propertyRevision:any, clientRevision:any, registryRevision:any, relationTypeClient:string, relationTypeRegistry:string){
  //   let data = {
  //     property: propertyRevision,
  //     client: clientRevision,
  //     registry: registryRevision,
  //     propertyClientRelationType: relationTypeClient
  //   };
  //   return this.http
  //     .post(`${environment.apiUrl}/revision/wizard`, data);
  // }

}
