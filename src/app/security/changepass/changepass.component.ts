import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './../../core/models';
import { Revision } from "./../../core/models";
import { AudsatHttp } from "./../../services/audsat-http";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../../environments/environment";

class Changepass {
  oldpassword: string;
  newpassword: string;
  cnewpassword: string;
}

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {
 
  changepass = new Changepass;
  revisions: Revision[];
  sentNewpass: boolean;;


  constructor(private ahttp: AudsatHttp, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  // input(form: NgForm){
  //   console.log(this.changepass);
  // }

  getFilter(Coldpassword: string, Cnewpassword: string, Ccnewpassword: string, token:string): Promise<any> {
    let data:any;
    if(Ccnewpassword==Cnewpassword){
    data = {
      password: Cnewpassword,
      singleTokenAcess:token
    };
  }

    return this.ahttp
      .put<any>(`${environment.apiUrl}/user/password/`, JSON.stringify(data))
      .then((response: any) => { return <Array<any>>response }); 
  }

  enviar(form: NgForm) {
    const token = this.route.snapshot.params["token"];  
    this.getFilter(this.changepass.oldpassword, this.changepass.newpassword, this.changepass.cnewpassword , token).then((data) => {
      this.revisions = <Revision[]>data;
      console.log(this.revisions)
      if(this.revisions.length === 0){
        this.sentNewpass=false;
      }
      else {
        this.sentNewpass=true;
      }
    });  
  }


}
