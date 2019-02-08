import { SecurityService } from './../../../security/security.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { guaranteeRevisionSkel } from './../../models';
import { GarantiasService } from './../../../garantias/garantias.service';
import { RevisionService } from './../../../services/revision.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'create-guarantee-related-to-registry',
  templateUrl: './create-guarantee-related-to-registry.component.html',
  styleUrls: ['./create-guarantee-related-to-registry.component.scss']
})

export class CreateGuaranteeRelatedToRegistryComponent implements OnInit {
  newThing = -1;
  revision = guaranteeRevisionSkel;
  unitsList = new Array();
  displayDialog: boolean;
  @Input() relatedTo:number;
  @Output() guaranteeCreated = new EventEmitter<string>();
  @Output() reload = new EventEmitter();
  en:any;
  blockSpecial: RegExp = /^[ a-zA-Z0-9 \u00A8-\u028F]*$/;

  constructor(private guaranteeService: GarantiasService,
    private securityService : SecurityService,
    private revisionService: RevisionService) {
      this.unitsList = this.securityService.getUnitsList();
     }

  ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNamesMin: ["Seg.","Ter.","Qua.","Qui.","Sex.","Sáb.","Dom."],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      clear: 'Clear'
    };
  }

  getGuarantee(){
    this.newThing = -1;
    this.guaranteeService.getByName(this.revision.guarantee.name).then((revision:any) =>{
      this.newThing = 0;
      this.revision = revision;
    }).catch(error => {
      this.newThing = 1;
    });
  }

  save(){
    if(this.newThing==0){
      delete this.revision.thing.revisions;
      delete this.revision.user;
    }
    this.revisionService.attachCreate(this.revision,this.relatedTo, null).then((response: any) => {
        this.reload.emit();
        this.hideDialog();
        this.guaranteeCreated.emit('complete');
        window.location.reload();
    });
  }
  showDialog() {
    this.displayDialog = true;
  }
  hideDialog() {
    this.displayDialog = false;
  }
  resetForm(form:NgForm){
    form.reset();
  }
}
