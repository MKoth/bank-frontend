import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/primeng";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from 'primeng/components/common/messageservice';
import { environment } from "../../../environments/environment";
import { SecurityService } from "../../security/security.service";

@Component({
  selector: "app-importclient",
  template: `
  <!-- <p-button type="button" (click)="showDialog()" label="Importar cliente"></p-button> -->
  <button pButton type="button" label="Importar Cliente"  class="ui-button" (click)="showDialog()"></button>
  <div>
      <p-dialog [(visible)]="displayDialog" [closable]="true" [modal]="true" [closeOnEscape]="true" [dismissableMask]="true" [width]="600" [height]="400">
      <p-header>
      <h2>Importar Arquivo CSV</h2>
    </p-header>

                          <!--
                          <p-fileUpload name="file" [url]="API_Url" (onUpload)="onUpload($event)"
                           accept=".csv,.xls,.xlsx" (onBeforeSend)="onBeforeSend($event)"
                                  multiple="false" maxFileSize="100000000" (onError)="onError($event)">
                                  <ng-template pTemplate="content">
                                      <ul>
                                          <li *ngFor="let file of uploadedFiles">{{file.name}} - {{file.size}} bytes</li>
                                      </ul>
                                  </ng-template>
                          </p-fileUpload>
                          -->
                          <div class="athos">
                          <p-fileUpload mode="advanced" name="file" 
                          [url]="API_Url" accept=".csv,.xls,.xlsx" multiple="multiple"  maxFileSize="1000000" (onUpload)="onUpload($event)" 
                          (onBeforeSend)="onBeforeSend($event)" (onError)="onError($event)" chooseLabel="Selecionar Arquivos">
                          </p-fileUpload>
                          </div>
      </p-dialog>
  </div>
  `,
  styles: []
})
export class ImportclientComponent implements OnInit {
  displayDialog: boolean;
  API_Url = `${environment.apiUrl}/clients/import`;
  uploadedFiles: any[] = [];

  selectedFile: File = null;

  constructor(private route: ActivatedRoute, 
    private http:HttpClient, private messageService: MessageService) {}

//   onUpload(event): void {
//     let status: any;
//     if (event.files.length == 0) {
//       console.log("No file selected.");
//       return;
//     }
//     this.selectedFile = <File>event.files;
//     const input = new FormData();
//     console.log(this.selectedFile[0].name);
//     input.append("file", this.selectedFile);
//     this.http.post(`${environment.apiUrl}/clientscsv`, input, {
//       reportProgress: true,
//       observe: 'events'
//       }
//       )
//       .subscribe(event => {
//         console.log(event); } , response => {status = response.status;
//    });
//    if (status == 200) {
//     this.messageService.add({ severity:'sucess', summary:'Upload com sucesso', detail:'O upload do arquivo foi concluido'});
//    } else {
//     this.messageService.add({ severity:'error', summary:'Falha no Upload', detail:'Não foi possivel completar o upload do arquivo.'});
//    }
// }

onBeforeSend(event) {
  const session = JSON.parse(localStorage.getItem("session"));
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + session.token);
  }

// onUpload(event): void {
//     console.log(event.files)
//     for(let file of event.files) {
//         this.uploadedFiles.push(file);
//         console.log(this.uploadedFiles)   
//     }
//     this.selectedFile = <File>event.files;
//     const input = new FormData();
//     this.http.post(`${environment.apiUrl}/clientscsv`, input, {
//       reportProgress: true,
//       observe: 'events'
//       }
//       )
//     this.messageService.add({ severity:'sucess', summary:'Upload com sucesso', detail:'O upload do arquivo foi concluido'});
//     window.location.reload(); //reload page when upload file was successful.
// }

onUpload(event): void {
    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }
    this.displayDialog = false;
    this.messageService.add({ severity:'sucess', summary:'Upload com sucesso', detail:'O upload do arquivo foi concluido'});
    // window.location.reload(); //reload page when upload file was successful.
    setTimeout(window.location.reload.bind(location), 2000); //reload page when upload file was successful after 2s.
  }

onError(event): void {
  this.displayDialog = false;
  this.messageService.add({ severity:'error', summary:'Falha no Upload', detail:'Não foi possivel completar o upload do arquivo.'});
}

showDialog() {
this.displayDialog = true;
}
closeDialog(event){
this.displayDialog = false;
}
  ngOnInit() {}
}
