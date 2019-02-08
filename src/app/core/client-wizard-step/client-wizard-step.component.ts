import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SecurityService } from '../../security/security.service';
import { ClientsService } from '../../clients/clients.service';
import { clientRevisionSkel } from "../../core/models";


@Component({
  selector: 'client-wizard-step',
  templateUrl: './client-wizard-step.component.html',
  styleUrls: ['./client-wizard-step.component.scss']
})
export class ClientWizardStepComponent implements OnInit {
  @ViewChild("form") form;
  newThing = -1;
  revision = Object.assign({},clientRevisionSkel);
  propertyClientRelationType = "Proprietário";
  unitsList = new Array();
  blockSpecial: RegExp = /^[ a-zA-Z \u00A8-\u028F]*$/;
  //cpfMask:any;

  public cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/ ,/\d/, /\d/ ,/\d/, '-', /\d/, /\d/];
  mask(): any {
    return {
      mask: (value) => {
        let numlength = value.replace(/[^\d]+/g, '');
        if (numlength.length <= 11)
          return this.cpfMask;
        else
          return this.cnpjMask;
      },
      guide: true
    };
  }

  constructor(
    private clientsService: ClientsService,
    private securityService : SecurityService
  ) {
    this.unitsList = this.securityService.getUnitsList();
  }

  ngOnInit() {
  }

  getCpfcnpj(){
    this.newThing = -1;
    this.clientsService.getByCpfcnpj(this.revision.client.cpfcnpj).then((revision:any) =>{
      this.newThing = 0;
      this.revision = revision;
    }).catch(error => {
      this.newThing = 1;
    });
  }

}
