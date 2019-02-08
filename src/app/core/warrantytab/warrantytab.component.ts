import { Guarantee } from "./../models";
import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-warrantytab',
  templateUrl: './warrantytab.component.html',
  styleUrls: ['./warrantytab.component.css']
})
export class WarrantytabComponent implements OnInit {
  @Input() revision: any;
  @Input() guarantee:any;
  @Input() detailsCollapsed: any;
  @Output() coords =  new EventEmitter();
  hasAlerts:boolean=false;
  hasAttentions:boolean=false;

  constructor() { }

  ngOnInit() {
    if (this.revision.alertsCounter>0){
      this.hasAlerts=true;          
    }
    if (this.revision.attentionsCounter>0){
      this.hasAttentions=true;
      // console.log(this.hasAttentions);
    }
  }
  
  getCoordinates(event){
    this.coords.emit(event);
  }
}
