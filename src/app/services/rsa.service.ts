import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { AudsatHttp } from "./../services/audsat-http";

@Injectable({
  providedIn: 'root'
})
export class RsaService {

  constructor(private http: AudsatHttp) { }

  carInfo(car:any) {
    return this.http
    .get(`${environment.apiUrl}/rsa/demonstrativo/` + car,{NotFoundErrorMsg: null});
  }

  carPolygon(car:any) {
    return this.http
      .get(`${environment.apiUrl}/rsa/poligono/` + car,{NotFoundErrorMsg: null});
  }

  clientInfo(cpfcnpj:any) {
    let v = cpfcnpj = cpfcnpj.replace(/\D/g,'');
    return this.http
      .get(`${environment.apiUrl}/rsa/cpfcnpj/`+v,{NotFoundErrorMsg: null});
  }

  findByMatch(base:string,polygon:any[]) {
    return this.http
      .post(`${environment.apiUrl}/rsa/base/`+base+`/findMatch`,polygon,{NotFoundErrorMsg: null});
  }

  findByRadius(base:string,polygon:any[],distance:any) {
    return this.http
      .post(`${environment.apiUrl}/rsa/base/`+base+`/findInRadius/0/`+distance,polygon,{NotFoundErrorMsg: null});
  }

  getRsaAlertConfigs(){
    return this.http
      .get(`${environment.apiUrl}/rsa/configs`,{NotFoundErrorMsg: null});
  }

  saveRsaAlertConfigs(configs:any){
    return this.http
      .post(`${environment.apiUrl}/rsa/configs`,configs);
  }

}
