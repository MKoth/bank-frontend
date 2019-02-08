import { RsaService } from './../../../services/rsa.service';
import { alertaTrabalhoEscravo, alertaIBAMA } from './../../models-alerts';
import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'alert-client-details',
  templateUrl: './alert-client-details.component.html',
  styleUrls: ['./alert-client-details.component.scss']
})
export class AlertClientDetailsComponent implements OnInit {
  @Input() base: any;
  timeagoInstance = timeago();
  // then you can use i
  configs:any=[];
  alertImage:any;
  dDate: any;
  alertModel:any = "";
  constructor(private rsaService :RsaService) { }

  ngOnInit() {
    this.rsaService.getRsaAlertConfigs().then((data:any)=>{
      this.configs = data[0];
    });
    timeago.register('pt_BR', locale);
    this.timeagoInstance.setLocale('pt_BR');
    this.dDate = this.timeagoInstance.format(this.base.baseResponse.versionDate, 'pt_BR');

    if (this.base.baseResponse.baseName === "trabalho_escravo"){
        this.alertImage = this.configs.criticality == "Crítico" ? "alerta-2-red.svg":"alerta-2.svg"; 
        this.alertModel = alertaTrabalhoEscravo;
        this.alertModel.custom = this.base.records.properties.estabelecimento;
    }else{
        this.alertModel = alertaIBAMA;
        this.alertModel.custom = this.base.records.properties.descricao_tad; 
    }

  }
}
