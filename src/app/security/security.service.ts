import { userRole, Unit } from './../core/models';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import * as $ from "jquery";
import { Observable } from "rxjs";
import { forEach } from "@angular/router/src/utils/collection";
// import { AudsatHttp } from "./../services/audsat-http";



@Injectable({
  providedIn: "root"
})
export class SecurityService {
  API_Url = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private router: Router) {}
  // newHttpHeaders() {
  //   let session = JSON.parse(localStorage.getItem("session"));
  //   if (session && session.token){
  //     return new HttpHeaders()
  //       .append('Authorization', 'Bearer ' + session.token)
  //       .set('Content-Type', 'application/json');
  //   } else {
  //     return new HttpHeaders()
  //       .set('Content-Type', 'application/json');
  //   }
  // }
  // addAuthHeader() {
  //   // return authorization header with jwt token
  //   let session = JSON.parse(localStorage.getItem("session"));
  //   if (session && session.token) {
  //     return session.token;
  //     // header.append("Authorization", session.token);
  //     // header.append("Content-Type", "application/json");
  //   }
  //   // console.log(header);
  //   // return header;
  // }
  handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          if (!(this.router.url === "/login")) {
            this.router.navigate(["/login"]);
          }
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }
  logout() {
    // remove user from local storage to log user out

    if (localStorage.getItem("session")) {
      // logged in so return true
      localStorage.removeItem("session");
    }
    if (!(this.router.url == "/login")) {
      this.router.navigate(["login"]);
    }
  }
  isTokenValid() {
    if (localStorage.getItem("session")) {
      // logged in so return true
      return true;
    } else {
      return false;
    }
  }
  getThisUser(){
    const session = JSON.parse(localStorage.getItem("session"));
    return session.user;
  }
  // getRoles(){
  //   const session = JSON.parse(localStorage.getItem("session"));
  //   return session.roles.tag;
  // }
  getUnitsRead():Unit[]{
    const session = JSON.parse(localStorage.getItem("session"));
    return session.unitsRead ;
  }
  getUnitsWrite():Unit[]{
    const session = JSON.parse(localStorage.getItem("session"));
    return session.unitsWrite;
  }

  getUnitsList():Unit[]{
    let unitsList = new Array();
    this.getUnitsWrite().forEach(unit => {
      unitsList.push({label:unit.unitLabel,value:unit})
    })
    return unitsList;
  }

  login(email, password) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password })
    };
    return fetch(this.API_Url, requestOptions)
      .then(this.handleResponse)
      .then(data => {
        // login successful if there's a jwt token in the response
        if (data.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("session", JSON.stringify(data));
          this.router.navigate(["/painel"]);
        }
        return data;
      });
  }

}
