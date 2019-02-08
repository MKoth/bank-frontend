import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "./../../../environments/environment";

@Component({
  selector: 'app-importmatricula',
  templateUrl: './importmatricula.component.html',
  styleUrls: ['./importmatricula.component.scss']
})
export class ImportmatriculaComponent implements OnInit {
  displayDialog: boolean;
  API_Url = `${environment.apiUrl}/registry/import`;
  uploadedFiles: any[] = [];

  selectedFile:File = null;

  constructor(private route: ActivatedRoute,
    private http:HttpClient, private messageService: MessageService) {}

//  onUpload(event): void {
//    if (event.files.length == 0) {
//      console.log("No file selected.");
//      return;
//    };
//    this.selectedFile = <File>event.files;
//    const input = new FormData();
//    input.append("file", this.selectedFile, this.selectedFile[0].name);
//    this.http.post('http://68.183.24.171:3500/clients/315/file', input, {
//      reportProgress: true,
//      observe: 'events'
//      })
//      .subscribe(event => {
//        console.log(event);
//   });
//}

onBeforeSend(event) {
  const session = JSON.parse(localStorage.getItem("session"));
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + session.token);
  }

onError(event): void {
  this.displayDialog = false;
  this.messageService.add({ severity:'error', summary:'Falha no Upload', detail:'Não foi possivel completar o upload do arquivo.'});
}

onUpload(event): void {
  this.displayDialog = false;
  this.messageService.add({ severity:'sucess', summary:'Upload com sucesso', detail:'O upload do arquivo foi concluido'});
  // window.location.reload(); //reload page when upload file was successful.
  setTimeout(window.location.reload.bind(location), 2000); //reload page when upload file was successful after 2s.
}


  showDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }

  ngOnInit() {}
}
