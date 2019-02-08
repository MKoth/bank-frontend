import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'entityinfobox',
  templateUrl: './entityinfobox.component.html',
  styleUrls: ['./entityinfobox.component.scss']
})
export class EntityinfoboxComponent implements OnInit {

  @Input() info:any;

  options = {
    type: 'horizontalBar',
    barThickness: 5,
    scales: {
      xAxes: [{
        stacked: true,
        display: false
      }],
      yAxes: [{
        stacked: true,
        display: false
      }]
    },
    legend: { display: false },
    tooltips: {enabled: false}
  };
  data: any;

  constructor() {}

  ngOnInit() {
    this.data = {
      datasets: [
        {
          backgroundColor: '#fc150d',
          data: [this.info.alerts]
        },
        {
          backgroundColor: '#ffad07',
          data: [this.info.attentions]
        },
        {
          backgroundColor: '#F8F8F6',
          data: [this.info.things]
        }
      ]
    }
  }

}
