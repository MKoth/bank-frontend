import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SecurityService } from '../../security/security.service';
import { MatriculaService } from '../../matricula/matricula.service';
import { registryRevisionSkel } from "../../core/models";

@Component({
  selector: 'registry-wizard-step',
  templateUrl: './registry-wizard-step.component.html',
  styleUrls: ['./registry-wizard-step.component.scss']
})
export class RegistryWizardStepComponent implements OnInit {
  @Input() canBeGuarantee: boolean = true;
  @ViewChild("form") form;
  @ViewChild("guarantee") guarantee;

  @Input() canGuaranteeRelateToOperation: boolean = true;
  
  newThing = -1;
  revision = registryRevisionSkel;
  infoCar:any;
  unitsList = new Array();

  constructor(
    private matriculaService: MatriculaService,
    private securityService : SecurityService
  ) {
    this.unitsList = this.securityService.getUnitsList();
  }

  ngOnInit() {
  }

  getRegistry(){
    this.newThing = -1;
    this.matriculaService.getByCode(this.revision.registry.code).then((revision:any) =>{ 
      this.newThing = 0;
      this.revision = revision;
    }).catch(error => {
      this.newThing = 1;
    });
  }
  
  resetForm(){
    console.log('chegou aqui');
    console.log(this.revision);
    this.revision.registry.name  = "";
    this.revision.registry.code = '';

    console.log(this.revision.units);
    // this.revision  = registryRevisionSkel;
    // console.log(this.revision);
  }
  
}
