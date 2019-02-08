import { Component } from "@angular/core";
import { AppComponent } from "./app.component";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

//import { PageEvent } from '@angular/material';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

declare const window: any;

@Component({
    selector: 'app-topbar',
    template: `
    <div class="main-header">
    <div class="p-grid p-nogutter topbar clearfix" *ngIf="exibindoNavbar()" [ngClass]="{'scrolled': scrolled}">
            <div class="p-col-4 topbar-left">
                <div class="logo">
                <a [routerLink]="[ '/buscarcliente' ]" routerLinkActive="active">
                    <img src="assets/layout/images/audsat-images/navbar-audsat-logo.png" alt="Audsat" class="logo">
                    <img src="assets/layout/images/audsat-images/navbar-audsat-logo-branco.png" alt="Audsat" class="logo-branco">
                </a>
                </div>
            </div>
            <div class="p-col-1">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
                    <i class="fa fa-angle-left"></i>
                </a>
            </div>
            <div class="p-col-7 topbar-right">
                <ul class="topbar-items" id="topbar-menu-button">
                    <li>
                        <a href="#" (click)="app.onTopbarMenuButtonClick($event)">
                            <i class="icon-menu"></i>
                        </a>
                    </li>
                </ul>
                <ul class="topbar-items fadeInDown animated" id="topbar-menu" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
                    <li #profile class="profile-item" [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">
                        <a (click)="app.onTopbarItemClick($event,profile)">
                            <img class="profile-image" src="assets/layout/images/avatar.png">
                        </a>
                        <ul class="poseidon-menu fadeInDown">
                            <li role="menuitem">
                                <a [routerLink]="[ '/settings' ]" routerLinkActive="active"
                                (click)="app.onTopbarSubItemClick($event)">
                                    <i class="fa fa-fw fa-user"></i>
                                    <span>Perfil</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a [routerLink]="[ '/rsaconfig' ]" routerLinkActive="active"
                                (click)="app.onTopbarSubItemClick($event)">
                                    <i class="fa fa-fw fa-bell"></i>
                                    <span>Configurações de Alertas</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a [routerLink]="[ '/buscarusuario' ]" routerLinkActive="active"
                                (click)="app.onTopbarSubItemClick($event)">
                                    <i class="fa fa-fw fa-search"></i>
                                    <span>Buscar Usuário</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a [routerLink]="[ '/login' ]" routerLinkActive="active" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="fa fa-fw fa-sign-out"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a [routerLink]="[ '/buscargarantias' ]" routerLinkActive="active" (click)="app.onTopbarSubItemClick($event)">
                            <img src="../assets/layout/images/navbar-garantias.svg" class="nav-icon">
                            <span>Garantias</span>
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="[ '/buscaroperacoes' ]" routerLinkActive="active"(click)="app.onTopbarSubItemClick($event)">
                            <img src="../assets/layout/images/navbar-operacoes.svg" class="nav-icon">
                            <span>Operações</span>
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="[ '/buscarmatricula' ]" routerLinkActive="active" (click)="app.onTopbarSubItemClick($event)">
                            <img src="../assets/layout/images/navbar-matriculas.svg" class="nav-icon">
                            <span>Matrículas</span>
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="[ '/buscarimovel' ]" routerLinkActive="active" (click)="app.onTopbarSubItemClick($event)">
                        <img src="../assets/layout/images/navbar-imoveis.svg" class="nav-icon">
                            <span>Imóveis</span>
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="[ '/buscarcliente' ]" routerLinkActive="active" (click)="app.onTopbarSubItemClick($event)">
                            <img src="../assets/layout/images/navbar-clientes.svg" class="nav-icon">
                            <span>Clientes</span>
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="[ '/dashboard' ]" routerLinkActive="active" (click)="app.onTopbarSubItemClick($event)">
                            <img src="../assets/layout/images/navbar-dashboard.svg" class="nav-icon">
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="[ '/painel' ]" routerLinkActive="active" (click)="app.onTopbarSubItemClick($event)">
                        <img src="../assets/layout/images/navbar-painel.svg" class="nav-icon">
                            <span>Painel</span>
                        </a>
                    </li>
                </ul>
            </div>
       </div>
    `
})
export class AppTopBarComponent {
  items: MenuItem[];
  scrolled = false;

  constructor(public app: AppComponent, private router: Router) {}

  exibindoNavbar() {
    let show: boolean;
    if (this.router.url == "/") {
      show = false;
    } else if (this.router.url == "/forgot") {
      show = false;
    } else {
      show = true;
    }
    return show;
  }

  ngOnInit() {
    this.items = [
      {
        label: "Painel"
      },
      {
        label: "Dashboard"
      },
      {
        label: "Clientes"
      },
      {
        label: "Imóveis"
      },
      {
        label: "Matrículas"
      },
      {
        label: "Operações"
      },
      {
        label: "Garantias"
      },
      {
        label: "Alertas"
      }
    ];
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 10) {
      this.scrolled = true;
    } else this.scrolled = false;
  }
}
