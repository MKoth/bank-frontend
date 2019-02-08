import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import { RevisionService } from "../../services/revision.service";
import { Revision } from "../../core/models";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { MessageService } from "primeng/components/common/messageservice";
import { Router, ActivatedRoute } from "@angular/router";
import { SecurityService } from '../../security/security.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'create-client-related-to',
  templateUrl: './create-client-related-to.component.html',
  styleUrls: ['./create-client-related-to.component.scss']
})

export class CreateClientRelatedToComponent implements OnInit {
  @Input() relatedTo:any;
  @Input() type:string;
  @Input() showPropertyClientRelationType: boolean = false;
  @Output() clientCreated = new EventEmitter<string>();
  @Output() reload = new EventEmitter();


  displayDialog: boolean;
  newThing = -1;
  units = new Array();
  unitsList = new Array();
  blockSpecial: RegExp = /^[ a-zA-Z \u00A8-\u028F]*$/;

  revision:any  = {
    client: {
      name: "",
      cpfcnpj: "",
      email: "",
    },
    user:{},
    units: []
  };

  relationType: string;

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
    private router: Router,
    private revisionService: RevisionService,
    private messageService: MessageService,
    private Sserv: SecurityService
  ) {
    this.Sserv.getUnitsWrite().forEach(unit => {
      this.unitsList.push({label:unit.unitLabel,value:unit})
    })
  }

  ngOnInit() {
  }

  loadRevision(){
    this.newThing = -1;
    if(this.revision.client.cpfcnpj.length!=14 && this.revision.client.cpfcnpj.length!=18)
      return;

    this.revisionService.getByKey("client",this.revision.client.cpfcnpj).then((revision:any) =>{
      console.log(revision);
      this.newThing = 0;
      this.revision = revision;
    }).catch(error => {
      this.newThing = 1;
      this.revision = {
        client: {
          name: "",
          cpfcnpj: this.revision.client.cpfcnpj,
          email: "",
        },
        user:{},
        units: []
      };
    });
  }

  attachClient(form) {
    // TODO: show loading
    if(this.newThing==0){
      delete this.revision.thing.revisions;
      delete this.revision.user;
    }
    this.revisionService.attachCreate(this.revision,this.relatedTo.id, this.type=="property"?this.relationType:"none").then((response: any) => {
        // TODO: hide loading
        this.closeDialog();
        this.clientCreated.emit('complete');
        this.reload.emit();
        window.location.reload();
    });
    // if(this.newThing){
    //   // let newRevision = {
    //   //   client: {
    //   //     name: this.nome,
    //   //     cpfcnpj: this.cpfcnpj,
    //   //     email: this.email,
    //   //   },
    //   //   units: this.units,
    //   // };
    //   // TODO: show loading
    //   this.cserv.attachCreate(revision,this.relatedTo, this.relationType).then((response: any) => {
    //       // TODO: hide loading
    //       this.closeDialog();
    //   });
    // } else {
    //   // TODO: show loading
    //   this.cserv.attach(this.revision,this.relatedTo, this.relationType).then((response: any) => {
    //       // TODO: hide loading
    //       this.closeDialog();
    //   });
    // }
  }

  showDialog() {
    this.displayDialog = true;
  }
  closeDialog() {
    this.displayDialog = false;
  }

  resetForm(form:NgForm){
    form.reset();
  }
}
