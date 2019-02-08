import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Inject, ViewChild, ElementRef, DoCheck } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-error',
  template: `
  <div class="exception-top">
    <img src="../layout/images/icon-error.png">
  </div>

  <div class="exception-bottom">
    <div class="exception-wrapper">
        <span class="exception-summary">Ops...algum erro ocorreu</span>
        <span class="exception-detail">Por favor contante um Administrador</span>
        <button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left black-btn">
            <span class="ui-button-icon-left ui-c"></span>
            <span class="ui-button-text ui-c">Painel</span>
        </button>
        <img src="../../assets/layout/images/audsat-images/navbar-audsat-logo-branco.png" class="logo-icon">
    </div>
  </div>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

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
