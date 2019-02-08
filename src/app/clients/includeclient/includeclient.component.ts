import { Component, OnInit, ViewChild } from "@angular/core";
import { ClientsService } from "../clients.service";
import { Revision,Unit } from "../../core/models";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { MessageService } from "primeng/components/common/messageservice";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { SecurityService } from '../../security/security.service';
import { RevisionService } from '../../services/revision.service';
import { SelectItem } from 'primeng/api';
import { TextMaskModule } from 'angular2-text-mask';

// <p-dialog class="modal" [(visible)]="displayDialog" [modal]="true" [closeOnEscape]="true"
// [closable]="true" [width]="600" [height]="400">

class includForm {
  nome: string;
  cpfcnpj: string;
  email: string;
  units: Unit[];
  cellPhone: string;
  phoneNumber: string;
}


@Component({
  selector: "app-includeclient",
  templateUrl: './includeclient.component.html',
  styleUrls: ["./includeclient.component.css"]
})

export class IncludeclientComponent implements OnInit {
  displayDialog: boolean;
  val: string;
  pessoaF: boolean = true;
  crevision: any;
  includform = new includForm();
  unitWrite: Unit[];
  units:Unit[] = new Array();
  unitsList = new Array();
  tempUnits=[];
  blockSpecial: RegExp = /^[ a-zA-Z \u00A8-\u028F]*$/;
  //Permite que o Radiobutton venha selecionado:
  selectedValue: string = "PF";
  client = {
    name: ""
  };

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

  userunits: string[];

  constructor(
    private router: Router,
    private revisionService: RevisionService,
    private messageService: MessageService,
    private securityService : SecurityService
  ) {
    this.unitWrite = this.securityService.getUnitsWrite();
    this.unitWrite.forEach(unit => {
      this.unitsList.push({label:unit.unitLabel,value:unit})
    })
  }

  registerClient(form: NgForm) {
    this.includform.units = this.units;
    let newrevision: any;
    let status: any;
    this.displayDialog = false;
    let Ccpf: string;
    if (this.includform.cpfcnpj === "") {
      Ccpf = "";
    } else {
      Ccpf = this.includform.cpfcnpj;
    }

    this.crevision = {
      units: this.includform.units,
      thing: {
        type: "client"
      },

      client: {
        name: this.includform.nome,
        cpfcnpj: Ccpf,
        email: this.includform.email,
        cellPhone: this.includform.cellPhone,
        phoneNumber: this.includform.phoneNumber
      }
    };
    this.revisionService.create(this.crevision).then((revision: any) => {
      this.router.navigate(["/cliente", revision.thing.id]);
    });
  }

  ngOnInit() {
  }

  onSubmit () {
    this.messageService.add({ severity:'sucess', summary:'Include com sucesso', detail:'O cliente foi incluido'});
  }

  showDialog() {
    this.displayDialog = true;
  }
  closeDialog() {
    this.displayDialog = false;
  }
  resetForm(form:NgForm){
    form.reset()
  }
}
