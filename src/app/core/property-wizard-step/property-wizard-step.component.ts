import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RsaService } from '../../services/rsa.service';
import { SecurityService } from '../../security/security.service';
import { PropertiesService } from '../../properties/properties.service';
import { propertyRevisionSkel } from "../../core/models";

@Component({
  selector: 'property-wizard-step',
  templateUrl: './property-wizard-step.component.html',
  styleUrls: ['./property-wizard-step.component.scss']
})
export class PropertyWizardStepComponent implements OnInit {
  @Input() canBeGuarantee: boolean = true;
  @Input() canGuaranteeRelateToOperation: boolean = true;
  @Input() showPropertyClientRelationType: boolean = false;
  @ViewChild("form") form;
  @ViewChild("guarantee") guarantee;

  newThing = -1;
  revision = propertyRevisionSkel;
  propertyClientRelationType: string;
  infoCar:any;
  unitsList = new Array();
  blockSpecial: RegExp = /^[ a-zA-Z0-9 \u00A8-\u028F]*$/;

  constructor(
    private rsaService: RsaService,
    private propertiesService: PropertiesService,
    private securityService : SecurityService
  ) {
    this.unitsList = this.securityService.getUnitsList();
  }

  ngOnInit() {
  }

  getCar(){
    this.infoCar = null;
    this.rsaService.carPolygon(this.revision.property.car).then((result:any)=>{
      if(result.features && result.features.length>0)
        this.infoCar = result;
      else
        this.infoCar = null;
    }).catch(error => {
      this.infoCar = null;
    });

    this.newThing = -1;
    this.propertiesService.getByCar(this.revision.property.car).then((revision:any) =>{
      this.newThing = 0;
      this.revision = revision;
    }).catch(error => {
      this.newThing = 1;
    });
  }

  resetForm(){
    this.newThing = -1;
    this.revision.property.car  = "";
    this.revision.property.complement = "";
    this.infoCar = null;
    this.guarantee.resetForm();
  }

}
