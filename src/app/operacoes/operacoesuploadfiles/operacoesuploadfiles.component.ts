import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/components/common/messageservice";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-operacoesuploadfile',
  templateUrl: './operacoesuploadfiles.component.html',
  styles: []
})
export class OperacoesUploadFilesComponent implements OnInit {

  uploadedFiles: any[] = [];
  displayDialog: boolean;
  selectedFile:File = null;

  constructor(private messageService: MessageService, private http: HttpClient) { }

  showDialog() {
    this.displayDialog = true;
  }

  myUploader(event): void {
    if (event.files.length == 0) {
      console.log("No file selected.");
      return;
    };

    const input = new FormData();
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        input.append("file", file, file.name);
    }

//TODO: change hardcoded client id
    this.http.post('http://68.183.24.171:3500/clients/315/file', input, {
      reportProgress: true,
      observe: 'events'
      })
      .subscribe(event => {
        console.log(event);
   });
}

  ngOnInit() {
  }

}
