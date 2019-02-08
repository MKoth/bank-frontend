import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { AudsatHttp } from "../services/audsat-http";
import { RevisionService } from "../services/revision.service";

@Injectable({
  providedIn: "root"
})

export class MatriculaService {

  constructor(
    private http: AudsatHttp,
    private revisionService: RevisionService
  ) {}

  getFilter(registrySearch:any): Promise<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/registries`, JSON.stringify(registrySearch))
      .then((response: any) => { return <Array<any>>response });
  }

  saveWizard(clientRevision:any, propertyRevision:any, registryRevision:any, operationRevision:any, guaranteeRevision:any, propertyClientRelationType:string){
    return this.revisionService.saveWizard(
      "registry",
      clientRevision,
      propertyRevision,
      registryRevision,
      operationRevision,
      guaranteeRevision,
      propertyClientRelationType
    );
  }

  getByCode(code:string){
    return this.revisionService.getByKey("registry", code);
  }

}
