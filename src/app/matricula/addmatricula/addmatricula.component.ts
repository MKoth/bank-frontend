import { Component, OnInit } from '@angular/core';
import {MatriculaService} from '../matricula.service';
import { modelStatus, User} from "./../../core/models";
import { NgForm } from '@angular/forms';
import { Revision } from "../../core/models";
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

class addproperty {
  CAR: string;
  complement: string;
 }


@Component({
  selector: 'app-addmarticula',
  templateUrl: './addmarticula.component.html',
  styleUrls: ['./addmarticula.component.scss'],
  providers: [MessageService] 
})
export class AddmatriculaComponent implements OnInit {

  public properties = [];
  
  msgs: Message[] = [];

  displayDialog1: boolean;
  val: string;
  pessoaF: boolean = true;
  crevision: any;
  // property: any;
  addproperty = new addproperty();
  revisions: Revision[];
  // addpropertyroute:addproperty[]
  status:any =  modelStatus;
  selectedStatus: string = "";

  //Permite que o Radiobutton venha selecionado:

  
  // selectedValue: string = "PF";

  // client = {
  //   name: "Cliente 1"
  // };

  // peFi() {
  //   this.pessoaF = true;
  // }

  // peJu() {
  //   this.pessoaF = false;
  // }
  
  

  constructor(private pserv: MatriculaService, private router: Router, private messageService: MessageService) {}


 ngOnInit() {}
 
  receiveMessage($event){
  
    this.displayDialog1=$event
   }

  buscar(form: NgForm) {
    console.log(form)
    console.log(JSON.stringify(this.addproperty));
    //  this.pserv.register(this.addproperty);
  }


  // message:string="HELLO WORLD"

  registerProperty(
    // nome: string,
    // cemail: string,
    // cpf: string,
    // coffice: string,
    // ctelephone: string,
    // ccellphone: string
  ) {
      // this.displayDialog1 = false;
      // let Ccpf: string;
      // if(cpf ===''){
      //     Ccpf = '';
      // }else{
      //     Ccpf=cpf;
      // }

    this.crevision = {  
      revisionStatus: "novoativoaaa",
      status: "novoativoaaa",
      thing:{
        type: "client"
      },
      property: {
        // name: nome,
        // cpfcnpj: Ccpf,
        // office: coffice,
        // email: cemail,
        // cellphone: ccellphone,
        // telephone: ctelephone
      }
    };

  }

  showDialog() {
    this.displayDialog1 = true;
  }
  closeDialog(){
    this.displayDialog1 = false;
  }

  incluir() {
    console.log("em breve");
  }
  // getAddproperty(){
    getAddproperty(addproperty){
        // this.router.navigate(["/mapaimovel",addproperty]);
      this.router.navigate(["/relacionarimovel",addproperty]);
      
    }
    show() {
      this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }
  clear() {
    this.msgs = [];
}
  // hide() {
  //     this.msgs = [];
  // }

}
