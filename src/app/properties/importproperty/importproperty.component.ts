import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from 'primeng/components/common/messageservice';
import { environment } from "./../../../environments/environment";
import { SecurityService } from "./../../security/security.service";

@Component({
  selector: 'app-importproperty',
  templateUrl: './importproperty.component.html',
  styleUrls: ['./importproperty.component.scss']
})
export class ImportpropertyComponent implements OnInit {
  displayDialog: boolean;
  API_Url = `${environment.apiUrl}/properties/import`;
  uploadedFiles: any[] = [];

  selectedFile:File = null;

  constructor(private route: ActivatedRoute,
     private http:HttpClient, private messageService: MessageService) {}

//   onUpload(event): void {
//     let status: any;
//     if (event.files.length == 0) {
//       console.log("No file selected.");
//       return;
//     };
//     this.selectedFile = <File>event.files;
//     const input = new FormData();
//     console.log(this.selectedFile[0].name);
//     input.append("file", this.selectedFile);
//     this.http.post(`${environment.apiUrl}/properties/import`, input, {
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
//     this.http.post(`${environment.apiUrl}/properties/import`, input, {
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
closeDialog() {
  this.displayDialog = false;
}
  ngOnInit() {}
}
