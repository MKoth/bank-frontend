import { Injectable } from "@angular/core";
// import { HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
// import { Client, Revision, Property } from "../core/models";
import { AudsatHttp } from "./../services/audsat-http";
import { RevisionService } from "./../services/revision.service";
// import { SecurityService } from "./../security/security.service";
// import { PanelMenu } from "primeng/primeng";
// import { parse_date_code } from "ssf/types";
// import { NgForm } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: "root"
})
export class PropertiesService {

  constructor(
    private http: AudsatHttp,
    private revisionService: RevisionService
  ) {}

  getFilter(propertySearch:any): Promise<any> {
    return this.http
    .post<any>(`${environment.apiUrl}/properties`, JSON.stringify(propertySearch))
    .then((response: any) => { return <Array<any>>response });
  }

  getByCar(car:string){
    return this.revisionService.getByKey("property",car);
  }

  saveWizard(clientRevision:any, propertyRevision:any, registryRevision:any, guaranteeRevision:any, propertyClientRelationType:string){
    return this.revisionService.saveWizard(
      "property",
      clientRevision,
      propertyRevision,
      registryRevision,
      null,
      guaranteeRevision,
      propertyClientRelationType
    );
  }

}
