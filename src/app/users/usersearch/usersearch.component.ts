import { Component, OnInit } from "@angular/core";
import { UsersService } from "./../users.service";
import { User, Revision } from "./../../core/models";
import { NgForm, FormGroup, FormBuilder, FormControl } from "@angular/forms";

class Usersearch {
  nome: string;
  email: string
  cpf: string;
}

@Component({
  selector: "app-usersearch",
  templateUrl: "./usersearch.component.html",
  styles: ["./usersearch.component.css"]
})
export class UserSearchComponent implements OnInit {
  users: User[];
  revisions: any;

  user = new Usersearch();

  constructor(private userserv: UsersService) {}

  ngOnInit() {
    let form = new FormControl (); 
    form.setValue({
      email: '', // or whatever fields you have
      name: ''
    });   
    // form.setValue(['email']);
    this.userserv.getFilter(form.value).then((data:any) => {
      this.users = data.results;});
    // this.buscar(form.value);
    // console.log(this.users);
  }

  buscar(form: NgForm) {
    console.log(form.value);
    this.userserv.getFilter(form.value).then((data:any) => {
      this.users = data.results;
      console.log(this.users);
  });
}


}
