import { Component, OnInit , Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registrytab',
  templateUrl: './registrytab.component.html',
  styleUrls: ['./registrytab.component.css']
})
export class RegistrytabComponent implements OnInit {

  @Input() revision: any;
  @Input() registry:any;
  @Input() detailsCollapsed: any;
  @Output() coords =  new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  getCoordinates(event){
    console.log('e aqui');
    this.coords.emit(event);
  }

}
