import { Component, OnInit, Input } from '@angular/core';
import { RsaService } from '../../services/rsa.service';

@Component({
  selector: 'alert-client',
  templateUrl: './alert-client.component.html',
  styleUrls: ['./alert-client.component.scss']
})
export class AlertClientComponent implements OnInit {
  ready: boolean = false;

  @Input() cpfcnpj: string;

  rsaClient:any[] = [];
  alerts:number = 0;
  alertData:any[] = [];
  configs:any;
  alertImage:any;

  constructor(
    private rsaService: RsaService
  ) {}

  ngOnInit() {
    this.rsaService.clientInfo(this.cpfcnpj).then((data:any) => {
      this.rsaClient = data;
      this.rsaClient.forEach(dados => {
        if(dados.records.length>1){
          dados.records.forEach(records =>{
          if(records!==null){
            this.alertData.push({baseResponse:dados.baseResponse,records:records});
            this.alerts = this.alerts+1;
          }
          })
        }else if(dados.records.length==1){
          this.alertData.push({baseResponse:dados.baseResponse,records:dados.records[0]});
          this.alerts = this.alerts+1;
        }else{
        }

      });
      this.alertData.sort(function(a,b) {
        return Date.parse(b.baseResponse.versionDate)-Date.parse(a.baseResponse.versionDate);
      });
      this.ready=true;
    });
  }
}
