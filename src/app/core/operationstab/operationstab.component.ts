import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-operationstab',
  templateUrl: './operationstab.component.html',
  styleUrls: ['./operationstab.component.css']
})
export class OperationstabComponent implements OnInit {
  @Input() revision: any;
  @Input() operation:any;
  @Input() detailsCollapsed: any;


  constructor() { }

  ngOnInit() {
  }

}
