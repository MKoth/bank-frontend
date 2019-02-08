import { Component, OnInit, Input } from '@angular/core';
import { environment } from "./../../../environments/environment";
import { AlertpanelComponent } from './../../core/alertpanel/alertpanel.component';
import { ActivatedRoute, Router } from "@angular/router";
import { ClientsService } from "./../../clients/clients.service";
import { Revision } from "../../core/models";
import { RevisionService } from "../../services/revision.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AudsatHttp } from "./../../services/audsat-http";
import { MessageService } from "primeng/components/common/messageservice";
import { Http, Response } from '@angular/http';
import { MapComponent } from '../../core/map/map.component';

import {saveAs} from 'file-saver';


@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  @Input() documents: Document[];
  displayDialog: boolean;
  API_Url:any;
  @Input() id:any;

  attachmentList:any = [];

  constructor(
    private http:AudsatHttp,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private cserv: ClientsService,
    private revisionService: RevisionService
  ) { }

  ngOnInit() {
    this.API_Url=`${environment.apiUrl}/revision/${this.id}/document`;
  }

  getDocument(filename:string, documentId:number){
    this.revisionService.downloadFile(this.id, documentId)
      .then(
        data => saveAs(data, filename)
      );
  }

  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }

  onBeforeSend(event) {
    const session = JSON.parse(localStorage.getItem("session"));
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + session.token);
  }

  onUpload(event): void {
    this.hideDialog();
    const input = new FormData();
    for(let file of event.files) {
      this.documents.push(file);
      input.append("file", file, file.name);
    }
    this.messageService.add({ severity: 'sucess', summary: 'Upload com sucesso', detail: 'O upload do arquivo foi concluido' });
    setTimeout(window.location.reload.bind(location), 2000);
  }

  onError(event): void {
    this.hideDialog();
    const input = new FormData();
    for(let file of event.files) {
        this.documents.push(file);
        input.append("file", file, file.name);
    }
    this.messageService.add({ severity: 'error', summary: 'Falha no Upload', detail: 'Não foi possivel completar o upload do arquivo.' });
  }

  // delete(rindex) {

  //   var x = document.getElementsByTagName("tr")
  //   console.log(x);

  //   var tr = rindex + 1
  //   console.log(tr)

  //   x.item(x[tr].rowIndex).remove()

  // }

  deleteService(filename: any, documentId:number){
    return this.http
      .delete(`${environment.apiUrl}/revision/`+this.id+`/document/`+documentId, filename);
  }

  deleteFile(filename:string, documentId:number){
    this.deleteService(filename, documentId);
    setTimeout(window.location.reload.bind(location), 2000);
  }

}
