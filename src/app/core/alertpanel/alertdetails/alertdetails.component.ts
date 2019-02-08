import { AlertaRSA } from './../../models';
import { Component, OnInit, Input, Renderer2, Inject} from '@angular/core';
import timeago from 'timeago.js';

let locale = function(number, index, total_sec) {
  // number: the timeago / timein number;
  // index: the index of array below;
  // total_sec: total seconds between date to be formatted and today's date;
  return [
    ['Agora', 'right now'],
    ['Há %s segundos', 'in %s seconds'],
    ['Há 1 minuto', 'em 1 minuto'],
    ['Há %s minutos', 'in %s minutes'],
    ['Há 1 hora', 'in 1 hour'],
    ['Há %s horas', 'in %s hours'],
    ['Há 1 dia', 'in 1 day'],
    ['Há %s dias', 'in %s days'],
    ['Há 1 semana', 'in 1 week'],
    ['Há %s semanas', 'in %s weeks'],
    ['Há 1 mes', 'in 1 month'],
    ['Há %s meses', 'in %s months'],
    ['Há 1 ano', 'in 1 year'],
    ['Há %s anos', 'in %s years']
  ][index];
};

@Component({
  selector: 'app-alertdetails',
  templateUrl: './alertdetails.component.html',
  styleUrls: ['./alertdetails.component.scss']
})
export class AlertdetailsComponent implements OnInit {

  @Input() info:any;
  timeagoInstance = timeago();
  // then you can use i
  dDate: any;
  constructor() {
    // this.timeagoInstance.render(document.querySelectorAll('.needtime'));
  }

  ngOnInit() {
    console.log(this.info);
    timeago.register('pt_BR', locale);
    this.timeagoInstance.setLocale('pt_BR');
    this.dDate = this.timeagoInstance.format(this.info.data.creation_date, 'pt_BR');
  }

}
