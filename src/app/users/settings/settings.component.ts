import { SecurityService } from './../../security/security.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { userStatus, modelUnit, modelUserPerfil , User, Unit, Revision} from "./../../core/models";
import {SelectItem} from 'primeng/api';
import { NgForm } from '@angular/forms';

// class userForm {
//   cpf: string;
//   phoneNumber: string;
//   cellPhone: string;
//   roles: string;
//   status: string;
//   company: string;
//   userunits: string;
// }

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
  labelUnits:string;
  unitRead:any;
  user:any;
  units=[] ;
  status:any =  userStatus;
  modelRoles = modelUserPerfil;
  selectedStatus: string = "";

  constructor(private userv: UsersService, private sserv:SecurityService) { 

    // this.exampleUser = {
    //   id: 20,
    //   email: "audsat@audsat.com.br",
    //   name: "Fernando Gael - Administrador",
    //   cpf: "111.222.333-76",
    //   phoneNumber: "(11)1111-1111",
    //   cellPhone: "(11)1111-1111",
    //   roles: "Todas as permissoes de Operacional , Gestao de usuarios",
    //   units: "0001,0002,0003"
    // }
  }

  disabled: boolean;
  // userform = new userForm();
  

  ngOnInit() {

    this.disabled = false;
    this.selectedStatus = "Aprovado";
    this.user = this.sserv.getThisUser();
    this.unitRead = this.sserv.getUnitsRead();
    this.unitRead.forEach(item => {
      this.units.push({label:item.unitLabel,
      value:item.unitLabel})
      })
  }

  isDisabled(){
    this.disabled = false;
    console.log(this.disabled)
  }

  confirmEdit(form: NgForm){
    console.log(this.user)
    this.userv.update(this.user)
      .then((user:User) => {
        this.user  = user;
      })
  }
  // editing:Boolean = false;
  // ShowEditing(){
  //   if( this.editing ==false){
  //     this.editing =true;
  //   }
  //   else{
  //     this.editing =false;
  //   }
  // }
  // email  = "";
  // adminUpdate(email): void{
  //   console.log(email);
  // }
  // editUser(){
    
  // }

}
