import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clienttab',
  templateUrl: './clienttab.component.html',
  styleUrls: ['./clienttab.component.scss']
})
export class ClienttabComponent implements OnInit {

    @Input() revision: any;
    @Input() client:any;
    @Input() detailsCollapsed: any;
    hasAlerts:boolean=false;
    hasAttentions:boolean=false;
  
    constructor() { }
  
    ngOnInit() {
      if (this.revision.client.alertsCounter>0){
        this.hasAlerts=true;          
      }
      if (this.revision.client.attentionsCounter>0){
        this.hasAttentions=true;
        console.log(this.hasAttentions);
      }
    }
}
