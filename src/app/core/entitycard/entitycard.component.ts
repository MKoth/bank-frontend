import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from "primeng/button";
import { Router } from "@angular/router";

@Component({
  selector: 'app-entitycard',
  templateUrl: './entitycard.component.html',
  styleUrls: ['./entitycard.component.scss']
})
export class EntitycardComponent implements OnInit {
  @Output() coordinates = new EventEmitter();
  @Input() title: string;
  @Input() subtitle: string;
  @Input() color: string;
  @Input() status: string;
  @Input() icon: string;
  @Input() icon2: string;
  @Input() detailsCollapsed: string = "true";
  @Input() property: any;
  @Input() registry: any;
  @Input() id:any;
  @Input() entityroute:any;

  data: any;
  options: any;

  constructor(private router:Router) {
    this.icon2 ='';
    this.options = {
      cutoutPercentage: 93,
      legend: { display: false },
      tooltips: {enabled: false}
    };
  }

  ngOnInit() {
  }

  sendCoordinates(){
    if(this.property){
    this.coordinates.emit(this.property);
  }else if(this.registry){
    this.coordinates.emit(this.registry);
  }
  }
  getEntity(){
    this.router.navigate([this.entityroute, this.id]);
  }

}
