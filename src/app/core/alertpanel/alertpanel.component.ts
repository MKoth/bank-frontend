import { Component, OnInit,Input } from '@angular/core';
import { AlertaRSA, alertMock } from './../models';
import { RsaService } from '../../services/rsa.service';


@Component({
  selector: 'app-alertpanel',
  templateUrl: './alertpanel.component.html',
  styleUrls: ['./alertpanel.component.scss']
})
export class AlertpanelComponent implements OnInit {
  @Input() coordinates:any[];
  alertasRSA: AlertaRSA [];
  tempBase:any[] = [];
  bases:any[] = [];
  critical:boolean;
  alertsLoaded: Promise<boolean>;
  // bases = ['amazonia_legal','biomas','car_app','car_area_altitude_superior_1800','car_area_consolidada','car_area_declividade_maior_45','car_area_imovel',
  // 'car_area_pousio','car_area_topo_morro','car_banhado','car_borda_chapada','car_hidrografia','car_manguezal','car_nascente_olho_dagua','car_reserva_legal',
  // 'car_restinga','car_servidao_administrativa','car_uso_restrito','car_vegetacao_nativa','car_vereda','comunidades_quilombolas','embargos_ibama','embargos_icmbio',
  // 'municipios','sitios_arqueologicos','terras_indigenas','unidades_conservacao'];
  radiusValue:any;

  alertData:any[] = [];
  configs:any;

  constructor(
    private rsaService: RsaService,
  ) {

    // this.alertasRSA = <AlertaRSA[]>alertMock;
   }

  ngOnInit() {

    this.rsaService.getRsaAlertConfigs().then((data:any)=>{
      console.log(data);
      //TODO: CHECK SWITCH CASE VALIDITY, D.DATABASES ARE NOT FORMATTED FOR REQUESTS
     data.forEach((d:any)=>{
       switch(d.database){
          case'Trabalho Escravo':
            d.database = 'car_servidao_administrativa';
            break;
          case 'Área de Preservação Permanente':
            d.database = 'car_area_consolidada';
            break;
          case 'Área de Proteção Ambiental (APA)':
            d.database = 'car_restinga';
            break;
          case 'Área de Relevante Interesse Ecológico (ARIE)':
            d.database = 'biomas';
            break;
          case 'Comunidades Quilombolas':
            d.database = 'comunidades_quilombolas';
            break;
          case 'Embargos ICMBIO':
            d.database = 'embargos_icmbio';
            break;
          case 'Embargos IBAMA':
            d.database = 'embargos_ibama';
            break;
          case  'Sítios Arqueológicos':
            d.database = 'sitios_arqueologicos';
            break;
          case  'Reserva Legal':
            d.database = 'car_reserva_legal';
            break;
          case 'Terras Indigenas':
            d.database = 'terras_indigenas';
            break;
          case 'Unidade de Conservação':
            d.database = 'unidades_conservacao';
            break;
       }
       if(d.criticality==="Crítico"){
         this.critical = true;
       }else{
         this.critical =false;
       }
       if(d.value===0){
         d.value=1;
       }
       if(d.metric==="Interseção"){
         this.rsaService.findByMatch(d.database,this.coordinates).then(data2=>{
           this.alertData.push({'data':data2,'critical':this.critical})
         }).catch(error=>{
           // console.log(error);
         })
       }
       if(d.metric==="Distância"){
         this.rsaService.findByRadius(d.database,this.coordinates,d.value).then(data2=>{
           this.alertData.push({'data':data2,'critical':this.critical});
         }).catch(error=>{
           // console.log(error);
         })
       }

     })
     this.alertsLoaded = Promise.resolve(true);
    }).catch(error=>{
      // console.log(error);
    });
    
   
  }
}

 // this.bases.forEach(b=>{
 //      this.rsaService.findByMatch(b,this.coordinates).then(data=>{
 //        // console.log(data);
 //        this.alertData.push(data);
 //      }).catch(error=>{
 //        console.log(error);
 //      })
 //      this.rsaService.findByRadius(b,this.coordinates,this.radiusValue).then(data=>{
 //        // console.log(data);
 //        this.alertData.push(data);
 //      }).catch(error=>{
 //        console.log(error);
 //      })
 //    })