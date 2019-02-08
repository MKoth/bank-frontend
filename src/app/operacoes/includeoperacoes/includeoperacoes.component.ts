import { MenuItem } from 'primeng/primeng';
import { Component, OnInit , ViewChild} from '@angular/core';
import { RsaService } from '../../services/rsa.service';
import { OperacoesService } from '../operacoes.service';
import { RevisionService } from '../../services/revision.service';
import { registryRevisionSkel, modelUnit, Revision, Property, Client, Unit} from "../../core/models";
import { SecurityService } from '../../security/security.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { MapComponent } from '../../core/map/map.component';

declare var require: any;

class addregistryinproperty {
  registryname: string;
  registrynumber: string;
}

@Component({
  selector: 'app-includeoperacoes',
  templateUrl: './includeoperacoes.component.html',
  styleUrls: ['./includeoperacoes.component.scss']
})

export class IncludeoperacoesComponent implements OnInit {
  @ViewChild("map") map: MapComponent;
  @ViewChild("map2") map2: MapComponent;
  modalHeight:number=500;
  amountOfGlebas:any[];
  coordinates:any;


  @ViewChild("operationStep") operationStep;
  @ViewChild("propertyStep") propertyStep;
  @ViewChild("glebasStep") glebasStep;
  @ViewChild("clientStep") clientStep;
  @ViewChild("registryStep") registryStep;

  unitsList = new Array();

  // items: MenuItem[];
  stepActiveIndex:number = 0;
  displayDialog: boolean;
  step_img = require("./../../../assets/layout/images/audsat-images/cadastro/operações/5etapas/1.png");

  polygons:any[] = [];
  points:any[] = [];
  unitWrite: Unit[];
  includform: any;
  hasAlerts:any[] =[];

  constructor(
    private rsaService: RsaService,
    private securityService: SecurityService,
    private messageService: MessageService,
    private revisionService: RevisionService,
    private operacoesService: OperacoesService
  ) {
    this.unitWrite = this.securityService.getUnitsWrite();
    this.unitWrite.forEach(unit => {
      this.unitsList.push({label:unit.unitLabel,value:unit})
    })
  }

  ngOnInit() {
  }

  setPropertyCoordinates(event){
    this.propertyStep.revision.property.coordinates = JSON.stringify(event);
  }

  setRegistryCoordinates(event){
    this.registryStep.revision.registry.coordinates = JSON.stringify(event);
  }

  setOperationCoordinates(event:any ){
    this.amountOfGlebas = [];
    console.log(event.length);
    event.forEach(e =>{
      this.amountOfGlebas.push("");
      this.hasAlerts.push('false');
    })
    this.coordinates = event;
    // this.operationStep.revision.operation.coordinates = JSON.stringify(event);
    console.log(this.operationStep.revision.operation.coordinates);
  }

  goTo(i:number){
    this.stepActiveIndex = i;
    this.step_img = require("./../../../assets/layout/images/audsat-images/cadastro/operações/5etapas/"+(i+1)+".png");
    if(i==1){
      this.map.updateSize();
      this.modalHeight=600;
    }else if (i==4){
      this.map2.updateSize();
      this.modalHeight=600;
    } else {
      this.modalHeight=500;
    }
  }

  next() {
    this.goTo(this.stepActiveIndex+1);
  }

  save() {
    let i = 0;
    this.coordinates.forEach(c=>{
      console.log(c);
      c['description'] = this.glebasStep.glebas[i];
      c['hasAlerts'] = this.hasAlerts[i];
      i++;
    });
    // this.coordinates['description'] = this.glebasStep.glebas;
    // this.coordinates['hasAlerts'] = this.hasAlerts;
    console.log(this.coordinates);
    this.operationStep.revision.operation.coordinates = JSON.stringify(this.coordinates);
    console.log(this.operationStep.revision.operation.coordinates);
    // console.log(this.operationStep);
    // console.log(this.propertyStep);
    // console.log(this.glebasStep.glebas);
    this.propertyStep.revision.user={};
    this.clientStep.revision.user={};
    // let glebaTemp = {};
    // glebaTemp = {'glebas': this.glebasStep.glebas};
      // this.registryStep.revision.user={};
    // this.operationStep.revision.user = {};

    // TODO: show loading
    //clientRevision:any, propertyRevision:any, operationRevision:any,
    this.operacoesService.saveWizard(
      this.clientStep.revision,
      this.propertyStep.revision,
      this.operationStep.revision,
      null,
      this.clientStep.propertyClientRelationType
    ).then((revision:any) => {
      // TODO: hide loading
      this.hideDialog();
    }).catch(error => {
      // TODO: hide loading
      this.hideDialog();
    });
    this.messageService.add({ severity:'sucess', summary:'Include com sucesso', detail:'A operação foi incluida'});
  }

  showDialog() {
    this.goTo(0);
    this.displayDialog = true;
  }

  hideDialog() {
    this.goTo(0);
    this.displayDialog = false;
  }

  // saveProperty(form: NgForm){
  //   this.includform = form;
  //   if(!this.includform.value.CAR||this.includform.value.CAR.trim()==""){
  //     this.messageService.add({ severity:'error', summary:'Erro', detail: "Ponto de Atendimentos está vazio", closable:true, life:10000});
  //   }
  //   else if(this.includform.value.units.length===0){
  //     this.messageService.add({ severity:'error', summary:'Erro', detail: "Ponto de Atendimentos está vazio", closable:true, life:10000});
  //   }
  //   else{
  //     this.units = [...this.includform.value.units];
  //     this.buttonDisabled = true;
  //     if(this.propertyexists){
  //       this.buttonDisabled = false;
  //       this.stepActiveIndex++;
  //       this.step_img = require("./../../../assets/layout/images/audsat-images/1.png");
  //       return;
  //     }
  //     let newrevision = {
  //       revisionStatus: "Ativo",
  //       status: "Ativo",
  //       units: this.includform.value.units,
  //       thing: {
  //         type: "property"
  //       },
  //       property: {
  //         car: this.includform.value.CAR,
  //         complement: this.includform.value.complement
  //       }
  //     }
  //     this.pserv.update(newrevision).then((response:any)=>{
  //       this.messageService.add({ severity:'success', summary:'Success', detail: "Novo Imóvel criado!", closable:true, life:10000});
  //       console.log(response);
  //       //this.infoCar = response.dados;
  //       this.prevision = response;
  //       this.buttonDisabled = false;
  //       this.stepActiveIndex++;
  //       this.stepActiveIndex++;
  //       this.step_img = require("./../../../assets/layout/images/audsat-images/1.png");
  //     });
  //   }

  // }

  // saveClientAndConnectToProperty(form: NgForm){
  //   if(!form.value.cpfcnpj||(form.value.cpfcnpj&&form.value.cpfcnpj.trim()=="")){
  //     this.messageService.add({ severity:'error', summary:'Erro', detail: "CPF/CNPJ está vazio", closable:true, life:10000});
  //     return;
  //   }else if(!form.value.name||(form.value.name&&form.value.name.trim()=="")){
  //     this.messageService.add({ severity:'error', summary:'Erro', detail: "Nome está vazio", closable:true, life:10000});
  //     return;
  //   }
  //   this.buttonDisabled = true;
  //   this.includform = form;
  //   //console.log(this.includform);
  //   let newclientrevision = {
  //     units: this.units,
  //     thing: {
  //       type: "client"
  //     },
  //     client: {
  //       cpfcnpj: this.includform.value.cpfcnpj,
  //       name: this.includform.value.name
  //     }
  //   }
  //   console.log(newclientrevision, this.prevision);
  //   this.pserv.attachCreate(newclientrevision, this.prevision.id, "active").then((response:any)=>{
  //     this.messageService.add({ severity:'success', summary:'Success', detail: "Novo cliente cadastrado e relacionado com o imóvel", closable:true, life:10000});
  //     //this.infoCar = response.dados;
  //     this.crevision = response;
  //     this.buttonDisabled = false;
  //     this.step_img = require("./../../../assets/layout/images/audsat-images/3.png");
  //     this.stepActiveIndex++;
  //   });
  // }

  // checkIfClientExists(cpfcnpj){
  //   this.pserv.getByCpfcnpj(cpfcnpj).then((response:any)=>{
  //     console.log(response);
  //     return response;
  //   });
  // }

  // connectExistingClientToProperty(form: NgForm){
  //   console.log(form);
  //   if(!form.value.cpfcnpj||(form.value.cpfcnpj&&form.value.cpfcnpj.trim()=="")){
  //     this.messageService.add({ severity:'error', summary:'Erro', detail: "CPF/CNPJ está vazio", closable:true, life:10000});
  //     return;
  //   }
  //   this.buttonDisabled = true;
  //   var clientId:any;
  //   this.includform = form;
  //   this.pserv.getByCpfcnpj(this.includform.value.cpfcnpj).then((response:any)=>{
  //     console.log(response);
  //     if(response.isRegistered!==0){
  //       clientId = response.isRegistered;
  //       this.pserv.attach(clientId, this.prevision.id, "active").then((response:any)=>{
  //         this.messageService.add({ severity:'success', summary:'Success', detail: "Cliente Relacionado!", closable:true, life:10000});
  //         console.log(response);
  //         this.buttonDisabled = false;
  //         this.step_img = require("./../../../assets/layout/images/audsat-images/3.png");
  //         this.stepActiveIndex++;
  //       });
  //     }else{
  //       this.buttonDisabled = false;
  //       this.messageService.add({ severity:'error', summary:'Erro', detail: "O cliente não existe ou o Cpf é invalido!", closable:true, life:10000});
  //     }
  //   });
  // }

}
