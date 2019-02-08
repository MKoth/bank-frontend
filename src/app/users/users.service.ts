import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { User, Revision } from "../core/models";
import { AudsatHttp } from "./../services/audsat-http";
import { SecurityService } from "./../security/security.service";

@Injectable({
  providedIn: "root"
})

export class UsersService {
  constructor(private http: AudsatHttp, private auth: SecurityService) {}

  getFilter(form): Promise<any> {
    // let data = {
    //   name: U,
    //   cpfcnpj: Ucpf,
    //   status: Ustatus
    // };

    return this.http
      .post<any>(`${environment.apiUrl}/users`, JSON.stringify(form))
      .then((response: any) => { return <User[]>response });
  }
  getUserbyId(uid: number) {
    return this.http
      .get(`${environment.apiUrl}/user/` + uid);
  }
  getById(rid: number) {
    return this.http
      .get(`${environment.apiUrl}/revision/` + rid);
  }

  register(user: any) {
    return this.http
      .post(`${environment.apiUrl}/user`, user);
  }

  update(user:any) {
    return this.http
      .put(
        `${environment.apiUrl}/user/` + user.userId,
        user
      );
  }

  delete(id: number) {
    return this.http
      .delete(`${environment.apiUrl}/user/` + id)
      .then(() => null);
  }
}
