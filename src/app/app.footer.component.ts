import { Component, Inject, forwardRef } from "@angular/core";
import { AppComponent } from "./app.component";
declare var require: any;

@Component({
  selector: "app-footer",
  template: `
        <div class="p-grid p-align-center vertical-container footer">
            <div class="p-col">
                <i class="icon-audsat"></i>
            </div>
            <div class="p-col copy-text">
                <i class="fa fa-copyright"></i>
                2018 Audsat - todos os direitos reservados.
            </div>
        </div>
    `,
    styles: [
        `
        .p-col{
            padding-left: 2em;
            padding-right: 2em;
        }
        img{
            height: 35px;
        }
        .copy-text {
            text-align: right;
        }
        `
      ]

})
export class AppFooterComponent {
  footer = require("./../assets/layout/images/audsat-images/login-footer-audsat-logo.png");
}
