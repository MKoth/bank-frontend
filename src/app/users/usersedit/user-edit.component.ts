import { MessageService } from 'primeng/components/common/messageservice';
import { SecurityService } from './../../security/security.service';
import { Component, OnInit, Input,Output,EventEmitter } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { modelStatus, modelUnit, modelUserPerfil , User, Unit, Revision} from "./../../core/models";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Output() showEdit= new EventEmitter();
  labelUnits = new Array();
  unitWrite:any;
  user:any;
  units:Unit[] = new Array();
  status:any =  modelStatus;
  modelRoles = modelUserPerfil;
  selectedStatus: string = "";
  selectedValue: string = "true";
  disabled = true;
  loading = false;
  
  

  constructor(private userv: UsersService, private router: Router, 
    private route: ActivatedRoute,private sserv:SecurityService , private messageService: MessageService) { }

  ngOnInit() {
    const uid = this.route.snapshot.params["uid"];
    this.userv.getUserbyId(uid).then((data:any) => {
    this.user = data;
    });
    this.disabled = true;
    this.selectedStatus = "Aprovado";
    this.user = this.sserv.getThisUser();
    this.unitWrite = this.sserv.getUnitsWrite();
    this.unitWrite.forEach(unit => {
      this.labelUnits.push({label:unit.unitLabel,value:unit})
      });
    console.log(this.labelUnits);
}


isDisabled(){
  this.disabled = !this.disabled;
  console.log(this.disabled)
}

confirmEdit(form: NgForm){
  console.log(this.user);
  // this.user.roles.units  = this.units;
  this.userv.update(form.value)
    .then((user:User) => {
      this.user  = user;
    });
    this.router.navigate(["/buscarusuario"]);
}

toggleEdit(){
  this.disabled = !this.disabled;
  this.showEdit.emit(!this.disabled);
}

showApprove(){
  this.messageService.add({ severity:'success', summary:'Successo', detail: "Usuário Aprovado"});
}

}
