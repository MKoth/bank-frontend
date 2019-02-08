import { Component, OnInit, Input,Output,EventEmitter,ViewChild } from "@angular/core";
import { MessageService } from 'primeng/components/common/messageservice';
import { ClientsService } from '../clients.service';
import { SecurityService } from '../../security/security.service';
import { RevisionService } from '../../services/revision.service';
import { Revision, User, Client, Unit } from "./../../core/models";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-clientdetails",
  templateUrl: "./clientdetails.component.html"
})

export class ClientdetailsComponent {
  @Input() revision: Revision;

  hasEmbargo:string;
  hasSlaveWork:string;
  mapHeight:string = null;

  isClient = true;
  loading = false;
  disabled = true;
  approveDisable:boolean = false;
  unitsList = new Array();

  @ViewChild('entitydetails') entitydetails:any;
  map:any;

  constructor(
    private revisionService: RevisionService,
    private securityService : SecurityService,
    private messageService: MessageService
  ) {
    this.securityService.getUnitsWrite().forEach(unit => {
      this.unitsList.push({label:unit.unitLabel,value:unit})
    })
  }

  ngOnInit() {
    console.log(this.revision);
    this.hasEmbargo = this.revision.hasEmbargo ? "Sim":"Não";
    this.hasSlaveWork = this.revision.hasSlaveWork ? "Sim":"Não";
    this.approveDisable = this.revision.status !== 'Protótipo';
  }

  ngAfterViewInit(){

    setTimeout(()=>{
      console.log(document.getElementsByClassName("client-one-section")[0].scrollHeight);
      console.log(document.getElementsByClassName("client-one-section")[0].clientHeight);
      this.mapHeight = document.getElementsByClassName("client-one-section")[0].scrollHeight+'px';
    },100);

  }

  ngAfterViewChecked(){
    this.map = this.entitydetails.map;
    // console.log(this.map);
  }

  showApprove(){
    this.messageService.add({ severity:'success', summary:'Successo', detail: "Cliente Aprovado"});
  }

  editClient(form: NgForm){
    delete this.revision.thing.revisions;
    delete this.revision.user;
    this.loading = true;
    // can not use finally due to angular bug
    this.revisionService.save(this.revision)
      .then((revision:Revision) => {
        this.revision  = revision;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  toggleEdit(){
    this.disabled = !this.disabled;
  }

}
