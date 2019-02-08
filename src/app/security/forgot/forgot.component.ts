import { Component, OnInit, OnDestroy, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { NgForm } from '@angular/forms';
// import { SecurityService } from './../security.service'
import { Revision } from "./../../core/models";
import { AudsatHttp } from "./../../services/audsat-http";
import { environment } from "../../../environments/environment";



declare var require: any;

class ForgotForm {
  email: string;
}

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.css"]
})
export class ForgotComponent implements OnInit {

  forgot = new ForgotForm;
  revisions: Revision[];
  sentEmail: boolean;

  logo = require("./../../../assets/layout/images/audsat-images/login-audsat-logo.png");
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private ahttp: AudsatHttp) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, "gradient-login");
  }
  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, "gradient-login");
  }

  getFilter(Femail: string): Promise<any> {
    return this.ahttp
      .get<any>(`${environment.apiUrl}/user/password/`+Femail)
      .then((response: any) => { return <Array<any>>response }); 
  }

  enviar(form: NgForm) {
    // console.log(JSON.stringify(this.forgot.email))  
    this.getFilter(this.forgot.email).then((data) => {
      this.revisions = <Revision[]>data;
      // console.log(this.revisions)
      if(this.revisions.length === 0){
        this.sentEmail=false;
      }
      else {
        this.sentEmail=true;
      }
    });  
  }

}
