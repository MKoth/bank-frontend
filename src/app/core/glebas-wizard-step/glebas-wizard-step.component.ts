import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RsaService } from '../../services/rsa.service';
import { SecurityService } from '../../security/security.service';

@Component({
  selector: 'glebas-wizard-step',
  templateUrl: './glebas-wizard-step.component.html',
  styleUrls: ['./glebas-wizard-step.component.scss']
})
export class GlebasWizardStepComponent implements OnInit {
  @ViewChild("form") form;
  glebas:any[] = new Array();
  @Input() amountOfGlebas:any[] ;
  index:number = 0;
  glebaTemp:any;

  constructor(
    private rsaService: RsaService,
    private securityService : SecurityService
  ) {

  }

  ngOnInit() {
    // this.amountOfGlebas.push("");
  }

  // addGleba(){
  //   this.index++;
  //   this.amountOfGlebas.push("");
  //   console.log(this.glebas);
  //   this.glebaTemp = {'glebas':this.glebas};
  // }

  // removeGleba(){
  //   this.index--;
  //   this.glebas.pop();
  //   this.amountOfGlebas.pop();
  // }
}
