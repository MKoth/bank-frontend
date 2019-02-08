import { Property } from './../models';
import { Component, OnInit , Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propertytab',
  templateUrl: './propertytab.component.html',
  styleUrls: ['./propertytab.component.css']
})
export class PropertytabComponent implements OnInit {

  @Input() revision: any;
  @Input() property:any;
  @Input() detailsCollapsed: any;
  @Output() coords =  new EventEmitter();
  hasAlerts:boolean=false;
  hasAttentions:boolean=false;

  constructor() { }

  ngOnInit() {
    // console.log(this.revision.property.attentionsCounter);
    if (this.revision.property.alertsCounter>0){
      this.hasAlerts=true;
    }
    if (this.revision.property.attentionsCounter>0){
      this.hasAttentions=true;
      // console.log(this.hasAttentions);
    }
  }

  getCoordinates(event){
    console.log('e aqui');
    this.coords.emit(event);
  }

}
