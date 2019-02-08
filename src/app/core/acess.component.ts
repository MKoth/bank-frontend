import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Inject, ViewChild, ElementRef, DoCheck } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-acess',
  template: `
      <div class="exception-top">
          <img src="../layout/images/icon-access.png">
      </div>
      <div class="exception-bottom">
          <div class="exception-wrapper">
              <span class="exception-summary">Acesso Negado</span>
              <span class="exception-detail">Sem permissão de acesso. Faça login para acessar esta página.</span>
              <a [routerLink]="[ '/login' ]" routerLinkActive="active">
                <button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left black-btn">
                  <span class="ui-button-icon-left ui-c"></span>
                  <span class="ui-button-text ui-c">Página de Login</span>
                </button>
              </a>
              <img src="../../assets/layout/images/audsat-images/navbar-audsat-logo-branco.png" class="logo-icon">
          </div>
      </div>
  `,
  styles: []
})
export class AcessComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, "error-page");
    this.renderer.addClass(this.document.body, "exception-body");
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, "error-page");
    this.renderer.addClass(this.document.body, "exception-body");
  }

}
