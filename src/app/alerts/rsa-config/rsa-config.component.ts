import { Component, OnInit } from '@angular/core';
import { rsaAlertSkel } from '../../core/models';
import { RsaService } from '../../services/rsa.service';


@Component({
  selector: 'rsa-config',
  templateUrl: './rsa-config.component.html',
  styleUrls: ['./rsa-config.component.scss']
})
export class RsaConfigComponent implements OnInit {
  metrics = ['Distância','Interseção'];
  databases = [
      'trabalho_escravo',
      'Área de Preservação Permanente',
      'Área de Proteção Ambiental (APA)',
      'Área de Relevante Interesse Ecológico (ARIE)',
      'comunidades_quilombolas',
      'embargos_icmbio',
      'embargos_ibama',
      'sitios_arqueologicos',
      'Reserva Legal',
      'terras_indigenas',
      'unidades_conservacao'
    ];
  databases_labels = {
      'trabalho_escravo':'Trabalho Escravo',
      'Área de Preservação Permanente':'Área de Preservação Permanente',
      'Área de Proteção Ambiental (APA)':'Área de Proteção Ambiental (APA)',
      'Área de Relevante Interesse Ecológico (ARIE)':'Área de Relevante Interesse Ecológico (ARIE)',
      'comunidades_quilombolas':'Comunidades Quilombolas',
      'embargos_icmbio':'Embargos ICMBIO',
      'embargos_ibama':'Embargos IBAMA',
      'sitios_arqueologicos':'Sítios Arqueológicos',
      'Reserva Legal':'Reserva Legal',
      'terras_indigenas':'Terras Indigenas',
      'unidades_conservacao':'Unidade de Conservação'
    };
  types = ['Gleba/matrícula','Imóvel associado à gleba - CAR'];
  criticalities = [{label:"Selecione",value:null},{label:"Crítico",value:"Crítico"},{label:"Não Crítico",value:"Não Crítico"}];
  configs:any = []
  configsTree:any = []
  loading = false;


  constructor(
    private rsaService: RsaService
  ) {
    this.databases.forEach(database => {
      this.configsTree[database] = [];
      if(database==="trabalho_escravo"){
          let alert = Object.assign({},rsaAlertSkel,{database:database})
          this.configsTree[database] = alert;
          this.configs.push(alert)
      } else {
        this.metrics.forEach(metric => {
          this.configsTree[database][metric] = [];
          this.types.forEach(type => {
            let alert = Object.assign({},rsaAlertSkel,{
              database:database,
              type:type,
              metric:metric
            })
            this.configsTree[database][metric][type] = alert;
            this.configs.push(alert)
          })
        })
      }
    });
    console.log(this.configsTree);
  }

  ngOnInit() {
    this.loading = true;
    // TODO: show loading
    this.rsaService.getRsaAlertConfigs().then((data:any) => {
      // TODO: hide loading
    this.loading = false;
      this.updateConfigs(data);
    });
  }

  updateConfigs(data){
    for (let i = 0; i < data.length; i++) {
      let config = data[i];
      if(config.database==="trabalho_escravo")
        this.configsTree[config.database]=config;
      else
        this.configsTree[config.database][config.metric][config.type]=config;
    }
    console.log(this.configsTree);

    this.configs = [];
    this.databases.forEach(database => {
      if(database==="trabalho_escravo")
        this.configs.push(this.configsTree[database]);
      else
        this.metrics.forEach(metric => {
          this.types.forEach(type => {
            this.configs.push(this.configsTree[database][metric][type]);
            console.log(this.configsTree[database][metric][type])
          })
        })
    })
    console.log(this.configs);
  }

  save(){
    this.loading = true;
    this.rsaService.saveRsaAlertConfigs(this.configs).then((data:any) => {
      this.loading = false;
      this.updateConfigs(data);
    });
  }

}

