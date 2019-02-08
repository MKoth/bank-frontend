import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Unit} from "../core/models";
import { AudsatHttp } from "./../services/audsat-http";
import { RevisionService } from "../services/revision.service";

@Injectable({
  providedIn: "root"
})

export class ClientsService {
  
  messages = {
    notFoundErrorMsg: "Cliente não encontrado.",
    conflictErrorMsg: "Cliente já cadastrado."
  }

  constructor(
    private http: AudsatHttp,
    private revisionService: RevisionService

  ) {}

  getFilter(ClientSearch:any): Promise<any> {
    // let data = {
    //   name: Cname,
    //   cpfcnpj: Ccpf,
    //   units: Cunit,
    //   status: Cstatus
    // };

    return this.http
      .post<any>(`${environment.apiUrl}/clients`, JSON.stringify(ClientSearch))
      .then((response: any) => { return <Array<any>>response });

  }

  getByCpfcnpj(cpfcnpj:any){
    return this.revisionService.getByKey("client",cpfcnpj);
  }

}