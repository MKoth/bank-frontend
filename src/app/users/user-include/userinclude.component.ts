import { Component, OnInit, ViewChild } from "@angular/core";
import { UsersService } from "./../users.service";
import { Revision, modelStatus, modelUserPerfil, modelUnit, modelUserPerfilNumber, userRole } from "./../../core/models";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { SecurityService } from './../../security/security.service'
import { NgForm } from "@angular/forms";
import { del } from "selenium-webdriver/http";
import { ViewEncapsulation } from '@angular/core';

class UserInclud{
  email: string;
  name: string;
  cpf: string;
  phoneNumber: string;
  cellPhone: string;
  roles:userRole;
}


class IncludForm {

  units: any;

}


// <p-dialog class="modal" [(visible)]="displayDialog" [modal]="true" [closeOnEscape]="true"
// [closable]="true" [width]="600" [height]="400">
@Component({
  selector: "app-userinclude",
  templateUrl: "./userinclude.component.html",
  styleUrls: ["./userinclude.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class UsersIncludComponent implements OnInit {

  userole = new userRole();
  userinclud = new UserInclud();
  selectedPerfil: string = "";
  selectedStatus: string = "";
  status: any = modelStatus;
  perfil: any = modelUserPerfil;
  perfilNumber: any = modelUserPerfilNumber;
    // includform: any;
  userunits:any=modelUnit;
  includform = new IncludForm();
  unitWrite: any;
  vectorUnits:any[] = [];
  arrayTest:any[] = [];
  displayDialog: boolean;
  val: string;
  pessoaF: boolean = true;
  urevision: any;
  selectedValue: string = "true";

  arrayteste: any[]= [];
  arrayteste2: any[]= [];
  
  
  //Permite que o Radiobutton venha selecionado:

  user = {
    name: "Usuario 1"
  };
  // teste(event)
  // {
  //   console.log(event);
  //   this.arrayTest.push(event.value);
  //   console.log(this.arrayTest);

  // }
  peFi() {
    this.pessoaF = true;
  }

  peJu() {
    this.pessoaF = false;
  }

  constructor(private userv: UsersService, private Sserv: SecurityService) { }

  
    
    
    
  // removeDuplicates(myArr, prop) {
  //   return myArr.filter((obj, pos, arr) => {
  //     return arr.map(mapObj =>
  //     mapObj[prop]).indexOf(obj[prop]) === pos;
  //     });
  //   }


  teste(event, rindex){
    this.arrayteste.push({tag: event.value.label, roleid: event.value.number, unit: this.unitWrite[rindex].unitId});

    var i; var j; var k; var duplicate: Boolean; var counting = 0;
    for (i = 0; i < this.arrayteste.length; i++) {
      for (j = 0; j < this.arrayteste.length; j++) {
        if ( this.arrayteste[i].unit == this.arrayteste[j].unit && this.arrayteste[i].roleid!= this.arrayteste[j].roleid ) {
          duplicate = true;
          console.log(duplicate)
          console.log("aray i:", this.arrayteste[i])
          console.log("aray j:", this.arrayteste[j])
        }      
      }   
    }
    
    console.log("aray i inicial:", this.arrayteste)

  }
    
  

  // registerUser() {

  //   // let testeArray = teste;
  //   console.log(this.arrayteste);
  registerUser(form: NgForm){

    console.log("formulario:", this.userinclud )

    // let testeArray = teste;
    // console.log(this.arrayteste);

    // this.displayDialog = false;
    // let UCpf: string;
    // if (this.userinclud.cpf === "") {
    //   UCpf = "";
    // } else {
    //   UCpf = this.userinclud.cpf;
    // }

    // if (this.selectedValue === "true") {
    //   Ursa = true;
    // } else {
    //   Ursa = false;
    // }
    // console.log(Ursa);

    // this.urevision = {
    //   revisionStatus: "novoativoaaa",
    //   status: "novoativoaaa",
    //   thing: {
    //     type: "user"
    //   },
    //   user: this.userinclud
    //   //   name: this.userinclud.name,
    //   //   cpfcnpj: this.userinclud.cpf,
    //   //   email: this.userinclud.email,
    //   //   cellphone: this.userinclud.cellPhone,
    //   //   telephone: this.userinclud.phoneNumber,
    //   //   roles: this.userinclud.roles
    //   }
  
  console.log("unrevision:", this.userinclud)
  // this.userv.register(this.urevision);
  this.userv.register(this.userinclud);

}

  ngOnInit() {
    this.unitWrite = this.Sserv.getUnitsWrite();

    // console.log(this.unitWrite);

     

    console.log(this.perfil, "perfil");
    
    this.unitWrite.forEach(item => {
      this.vectorUnits.push({ label: item.unitLabel, value: item.unitLabel })
    })

    // console.log(this.vectorUnits)
  }

  showDialog() {
    this.displayDialog = true;
  }
  closeDialog() {
    this.displayDialog = false;
  }
}
