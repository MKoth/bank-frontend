import { Component, OnInit, OnDestroy, Renderer2 } from "@angular/core";
import { Inject, ViewChild, ElementRef, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from "jquery";
import { SecurityService } from "./../../security/security.service";
import { DOCUMENT } from "@angular/common";
import {SelectItem} from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

declare var require: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit {
  logo = require("./../../../assets/layout/images/audsat-images/login-audsat-logo.png");
  loading:boolean=false;
  email:string;
  password:string;

  constructor(
    private messageService: MessageService,
    private auth: SecurityService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.auth.logout();
  }

  ngOnInit() {
    this.renderer.addClass(this.document.body, "gradient-login");
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, "gradient-login");
  }

  login() {
    this.loading=true;
    this.auth.login(this.email, this.password).catch(erro => {
      this.messageService.add({ severity:'error', summary:'Falha na Autenticação', detail:'Email ou senha invalido!'});
      this.loading=false;
    });
  }
}
