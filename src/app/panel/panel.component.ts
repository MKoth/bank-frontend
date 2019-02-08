import { Component, OnInit} from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { ViewEncapsulation, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Revision } from "../core/models";
import { PropertiesService } from "../properties/properties.service";
import { RsaService } from "../services/rsa.service";
import { PanelService } from "./panel.service";
import { South, SouthEast, CentralWest, NordEast, North } from './panel.regionsPolygons';
import { 
    Acre, 
    Alagoas, 
    Amapa, 
    Amazonas, 
    Bahia, 
    Ceara, 
    DistritoFederal, 
    EspiritoSanto, 
    Goias,
    Maranhao,
    MatoGrossoDoSul,
    MattoGrosso,
    MinasGerais,
    Para,
    Paraiba,
    Parana,
    Pernambuco,
    Piaui,
    RioDeJaneiro,
    RioGrandeDoNorte,
    RioGrandeDoSul,
    Rondonia,
    Roraima,
    SantaCatarina,
    SaoPaulo,
    Sergipe,
    Tocantis
} from './panel.statesPolygons';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None
})

export class PanelComponent implements OnInit {
    @ViewChild("map") map;
    //select options holders

    criteria: SelectItem[];
    payis: SelectItem[];
    embargos: SelectItem[];
    attentions: SelectItem[];
    agricolas: SelectItem[];
    outros: SelectItem[];
    valoras: SelectItem[];
    //selected option holders
    selectedFilter: {
        code: string;
    };
    selectedEmbargo: {
        code: string;
    };
    selectedAttentions: {
        code: string;
    };
    selectedAgricolas: {
        code: string;
    }[];
    selectedOutros: {
        code: string;
    }[];
    selectedValoras: {
        code: string;
    }[];
    //checkbox result holders
    selectedCriteria:string = "total";
    selectedAlertas: string[] = [];
    selectedAttention: string[] = [];
    selectedLaudos: string[] = [];
    selectedValue: string[] = [];
    selectedValue2: string[] = [];
    //three state checkboxes result holder
    selectedComesem: boolean = null;
    selectedGarantia: boolean = null;
    selectedAgricola: boolean = null;
    selectedLaudo: boolean = null;
    selectedOutro: boolean = null;
    selectedValor: boolean = null;
    focusedForm: string;
    expandedPanel: boolean = true;

    //map data

    imoveis:boolean = true;
    matricula:boolean = false;
    operacoes:boolean = false;
    garantias:boolean = false;
    dataImoveis: any[] = [];
    dataMatricula: any[] = [];
    dataOperacoes: any[] = [];
    pointDataMatricula: any[] = [];
    pointDataImoveis: any[] = [];
    pointDataOperacoes: any[] = [];

    //data for filters
    filteredRevisions: any[];
    allRevisions: any[];
    
    topDistance: string;

    mapHeight:number = 800;

    totalClientes:number = 0;
    filteredClientes:number = 0;
    percentageClientes:number = 100;
    totalProperties:number = 0;
    filteredProperties:number = 0;
    percentageProperties:number = 100;
    totalRegistries:number = 0;
    filteredRegistries:number = 0;
    percentageRegistries:number = 100;
    totalOperations:number = 0;
    filteredOperations:number = 0;
    percentageOperations:number = 100;
    totalGuarantees:number = 0;
    filteredGuarantees:number = 0;
    percentageGuarantees:number = 100;

    mapLoading:boolean = true;

    constructor(
      private rsaService: RsaService,
      private propertiesService: PropertiesService,
      private panelService:PanelService
    ) {}

    clearFiltersClick(){
        this.selectedFilter = null;
        this.selectedEmbargo = null;
        this.selectedAttentions = null;
        this.selectedAgricolas = null;
        this.selectedOutros = null;
        this.selectedValoras = null;
        this.selectedCriteria = "total";
        this.selectedAlertas = [];
        this.selectedAttention = [];
        this.selectedLaudos = [];
        this.selectedValue = [];
        this.selectedValue2 = [];
        this.selectedComesem = null;
        this.selectedGarantia = null;
        this.selectedAgricola = null;
        this.selectedLaudo = null;
        this.selectedOutro = null;
        this.selectedValor = null;
        this.focusedForm = null;
        this.applyFilters();
    }

    onExpandPanel(){
        this.expandedPanel=!this.expandedPanel;
    }

    onAgricolaChange(e){
        if(e){
            this.selectedOutro=null;
        }
    }

    onOutroChange(e){
        if(e){
            this.selectedAgricola=null;
        }
    }

    onFocusForm(name, offFocus = false){
        if(this.focusedForm === name){
            if(offFocus)
                this.focusedForm = null;
            return;
        }
        switch(name){
            case 'geografico':
                this.calculateDistanceToMargin(1, 'filtro-geografico');
                break;
            case 'alertas':
                this.calculateDistanceToMargin(2, 'alertas-form');
                break;
            case 'imoveis':
                this.calculateDistanceToMargin(3, 'imoveis-form');
                break;
            case 'matriculas':
                this.calculateDistanceToMargin(4, 'matriculas-form');
                break;
            case 'produtos':
                this.calculateDistanceToMargin(5, 'produtos-form');
                break;
            case 'garantias':
                this.calculateDistanceToMargin(6, 'garantias-form');
                break;
            default:
                break;
        }
        //this.applyFilters(); 
        this.focusedForm = name;
    }

    calculateDistanceToMargin(index:number, formClass:string){
        this.topDistance = "30px";
        
        setTimeout(()=>{
            var itemTopDistanceEl = <HTMLElement>document.getElementsByClassName("panel-item")[index];
            var itemTopDistance = itemTopDistanceEl.offsetTop;
            var formTopDistanceEl = <HTMLElement>document.getElementsByClassName(formClass)[0];
            var formTopDistance = formTopDistanceEl.offsetTop;
            this.topDistance = formTopDistance - itemTopDistance + 30 + "px";
        },10);
        //this.topDistance = formTopDistance - itemTopDistance + 30 + "px";
        //this.topDistance = 30+'px';
    }

    isInsidePolygon(point:any, vs:any) {
        console.log(point);
        console.log(vs);
        // ray-casting algorithm based on
        // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
        var x = point[0], y = point[1];
    
        var inside = false;
        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i][0], yi = vs[i][1];
            var xj = vs[j][0], yj = vs[j][1];
    
            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
    
        return inside;
    };
    polygonCenter(arr)
    {
        var minX, maxX, minY, maxY;
        for (var i = 0; i < arr.length; i++)
        {
            minX = (arr[i][0] < minX || minX == null) ? arr[i][0] : minX;
            maxX = (arr[i][0] > maxX || maxX == null) ? arr[i][0] : maxX;
            minY = (arr[i][1] < minY || minY == null) ? arr[i][1] : minY;
            maxY = (arr[i][1] > maxY || maxY == null) ? arr[i][1] : maxY;
        }
        return [(minX + maxX) / 2, (minY + maxY) / 2];
    }

    ngOnInit() {
        this.panelService.getFilter({}).subscribe((result)=>{
            console.log(result);
            this.totalClientes = result[0].revisions.length;
            this.totalProperties = result[1].revisions.length;
            this.totalRegistries = result[3].revisions.length;
            this.totalOperations = result[4].revisions.length;
            this.totalGuarantees = result[2].revisions.length;
    
            this.allRevisions = [
                ...result[0].revisions,
                ...result[1].revisions,
                ...result[2].revisions, 
                ...result[3].revisions, 
                ...result[4].revisions 
            ];
            this.filteredRevisions = [...this.allRevisions];
            this.panelService.getRelatedRevisionsFromArray(this.allRevisions).subscribe(responseList=>{
                //console.log(this.allRevisions);
                
                this.mapLoading = false;
                setTimeout(()=>{this.map.zoom = 4;
                    this.map.latitude =  -47.92972;
                    this.map.longitude =  -15.77972;
                    this.showOnMap(this.allRevisions);
                    this.calculateKPI();
                },200)
                
            })
        })
        
        this.criteria = [
            {label:"Carteira ativa", value:"active"}, 
            {label:"Carteira total", value:"total"}, 
        ];
        this.payis = [
            {label:'Brasil', value:{code:"BR"}},
            {label:'Região Norte', value:{code:"N"}},
            {label:'Região Nordeste', value:{code:"NE"}},
            {label:'Região Centro-Oeste', value:{code:"CO"}},
            {label:'Região Sudeste', value:{code:"SE"}},
            {label:'Região Sul', value:{code:"S"}},
            {label:'Acre', value:{code:"AC"}},
            {label:'Alagoas', value:{code:"AL"}},
            {label:'Amapá', value:{code:"AP"}},
            {label:'Amazonas', value:{code:"AM"}},
            {label:'Bahia', value:{code:"BA"}},
            {label:'Ceará', value:{code:"CE"}},
            {label:'Distrito Federal', value:{code:"DF"}},
            {label:'Espírito Santo', value:{code:"ES"}},
            {label:'Goiás', value:{code:"GO"}},
            {label:'Maranhão', value:{code:"MA"}},
            {label:'Mato Grosso', value:{code:"MT"}},
            {label:'Mato Grosso do Sul', value:{code:"MS"}},
            {label:'Minas Gerais', value:{code:"MG"}},
            {label:'Pará', value:{code:"PA"}},
            {label:'Paraíba', value:{code:"PB"}},
            {label:'Paraná', value:{code:"PR"}},
            {label:'Pernambuco', value:{code:"PE"}},
            {label:'Piauí', value:{code:"PL"}},
            {label:'Rio de Janeiro', value:{code:"RJ"}},
            {label:'Rio Grande do Norte', value:{code:"RN"}},
            {label:'Rio Grande do Sul', value:{code:"RS"}},
            {label:'Rondônia', value:{code:"RO"}},
            {label:'Roraima', value:{code:"RR"}},
            {label:'Santa Catarina', value:{code:"SC"}},
            {label:'São Paulo', value:{code:"SP"}},
            {label:'Sergipe', value:{code:"SER"}},
            {label:'Tocantins', value:{code:"TO"}}
        ];
        this.embargos = [
            {label:'Embargos IBAMA (Total)', value:{code:"total"}},
            {label:'Embargos IBAMA (Não total)', value:{code:"not-totlal"}}
        ];
        this.attentions = [
            {label:'Atenção 1', value:{code:"att1"}},
            {label:'Atenção 2', value:{code:"att2"}},
            {label:'Atenção 3', value:{code:"att3"}}
        ];
        this.agricolas = [
            {label:'arroz', value:{code:"arroz"}},
            {label:'mandioca', value:{code:"mandioca"}},
            {label:'batata', value:{code:"batata"}},
            {label:'soja', value:{code:"soja"}},
            {label:'milho', value:{code:"milho"}},
            {label:'feijao', value:{code:"feijao"}},
            {label:'ervilha', value:{code:"ervilha"}},
            {label:'cana', value:{code:"cana"}},
            {label:'tremoço', value:{code:"tremoço"}}
        ];
        this.outros = [
            {label:'NCE', value:{code:"nce"}},
            {label:'CDC', value:{code:"cdc"}},
            {label:'Crédito comercial', value:{code:"cc"}}
        ];
        this.valoras = [
            {label:'Hipotecária', value:{code:"Hipotecária"}},
            {label:'Penhor', value:{code:"Penhor"}},
            {label:'Automóvel', value:{code:"Automóvel"}}
        ];
    }

    showOnMap(revisions:Revision[]){
        this.dataImoveis = [];
        this.dataMatricula = [];
        this.dataOperacoes = [];
        this.pointDataImoveis = [];
        this.pointDataMatricula = [];
        this.pointDataOperacoes = [];
        let coordinates;
        revisions.forEach(listElement=>{
            if(listElement.operation){
                if(listElement.operation.coordinates){
                    coordinates = JSON.parse(listElement.operation.coordinates);
                    if(coordinates[0].coordinates){
                        this.dataOperacoes.push(coordinates[0].coordinates.slice());
                    }
                    else{
                        this.dataOperacoes.push(coordinates);
                    }
                }
            } else if(listElement.property){
                if(listElement.property.coordinates){
                    coordinates = JSON.parse(listElement.property.coordinates);
                    if(coordinates[0].coordinates){
                        this.dataImoveis.push(coordinates[0].coordinates.slice());
                    }
                    else{
                        this.dataImoveis.push(coordinates);
                    }
                }
            } else if(listElement.registry){
                if(listElement.registry.coordinates){
                    coordinates = JSON.parse(listElement.registry.coordinates);
                    if(coordinates[0].coordinates){
                        this.dataMatricula.push(coordinates[0].coordinates.slice());
                    }
                    else{
                        this.dataMatricula.push(coordinates);
                    }
                }
            }
        });
        this.pointDataImoveis = [];
        this.dataImoveis.forEach(propertyCoordinates=>{
            //this.pointDataImoveis.push(this.polygonCenter(propertyCoordinates));
            this.pointDataImoveis.push(this.map.getCenter([propertyCoordinates]));
        });

        this.pointDataMatricula = []
        this.dataMatricula.forEach(registryCoordinates=>{
            //this.pointDataMatricula.push(this.polygonCenter(registryCoordinates));
            this.pointDataMatricula.push(this.map.getCenter([registryCoordinates]));
        });

        this.pointDataOperacoes = []
        this.dataOperacoes.forEach(operationCoordinates=>{
            //this.pointDataOperacoes.push(this.polygonCenter(operationCoordinates));
            this.pointDataOperacoes.push(this.map.getCenter([operationCoordinates]));
        });
    }

    calculateKPI(){
        this.filteredClientes = 0;
        this.filteredGuarantees = 0;
        this.filteredOperations = 0;
        this.filteredProperties = 0;
        this.filteredRegistries = 0;
        this.filteredRevisions.forEach(revision=>{
            if(revision.client){
                this.filteredClientes++;
            }
            else if(revision.guarantee){
                this.filteredGuarantees++;
            }
            else if(revision.operation){
                this.filteredOperations++;
            }
            else if(revision.property){
                this.filteredProperties++;
            }
            else if(revision.registry){
                this.filteredRegistries++;
            }
        });
        this.percentageClientes = this.filteredClientes/this.totalClientes*100;
        this.percentageGuarantees = this.filteredGuarantees/this.totalGuarantees*100;
        this.percentageOperations = this.filteredOperations/this.totalOperations*100;
        this.percentageProperties = this.filteredProperties/this.totalProperties*100;
        this.percentageRegistries = this.filteredRegistries/this.totalRegistries*100;
    }

    applyGeografics(){
        if(this.selectedFilter == null||this.selectedFilter&&this.selectedFilter.code=="BR"){
            this.map.zoom = 6;
            this.map.latitude =  -47.92972;
            this.map.longitude =  -15.77972;
        }
        else if(this.selectedFilter.code=="N"){
            this.map.zoom = 7;
            this.map.latitude =  -68.9133614;
            this.map.longitude =  -4.1364454;
        }
        else if(this.selectedFilter.code=="NE"){
            this.map.zoom = 7;
            this.map.latitude =  -49.6395758;
            this.map.longitude =  9.5507543;
        }
        else if(this.selectedFilter.code=="CO"){
            this.map.zoom = 8;
            this.map.latitude =  -60.4372775;
            this.map.longitude =  -12.6467859;
        }
        else if(this.selectedFilter.code=="SE"){
            this.map.zoom = 8;
            this.map.latitude =  -49.9585856;
            this.map.longitude =  -18.5140031;
        }
        else if(this.selectedFilter.code=="S"){
            this.map.zoom = 9;
            this.map.latitude =  -52.2068371;
            this.map.longitude =  -27.6467333;
        }
        else if(this.selectedFilter.code=="AC"){
            this.map.zoom = 9;
            this.map.latitude =  -70.5264976;
            this.map.longitude =  -9.0478679;
        }
        else if(this.selectedFilter.code=="AL"){
            this.map.zoom = 9;
            this.map.latitude =  -36.6502426;
            this.map.longitude =  -9.6611661;
        }
        else if(this.selectedFilter.code=="AP"){
            this.map.zoom = 10;
            this.map.latitude =  -51.9161977;
            this.map.longitude =  1.3545442;
        }
        else if(this.selectedFilter.code=="AM"){
            this.map.zoom = 7;
            this.map.latitude =  -63.5185396;
            this.map.longitude =  -4.479925;
        }
        else if(this.selectedFilter.code=="BA"){
            this.map.zoom = 10;
            this.map.latitude =  -41.9294776;
            this.map.longitude =  -12.285251;
        }
        else if(this.selectedFilter.code=="CE"){
            this.map.zoom = 10;
            this.map.latitude =  -39.7156073;
            this.map.longitude =  -5.3264703;
        }
        else if(this.selectedFilter.code=="DF"){
            this.map.zoom = 12;
            this.map.latitude =  -47.7970891;
            this.map.longitude =  -15.7754462;
        }
        else if(this.selectedFilter.code=="ES"){
            this.map.zoom = 8;
            this.map.latitude =  -40.1721991;
            this.map.longitude =  -19.5687682;
        }
        else if(this.selectedFilter.code=="GO"){
            this.map.zoom = 12;
            this.map.latitude =  -50.1392928;
            this.map.longitude =  -15.9323662;
        }
        else if(this.selectedFilter.code=="MA"){
            this.map.zoom = 10;
            this.map.latitude =  -45.3930262;
            this.map.longitude =  -5.2085503;
        }
        else if(this.selectedFilter.code=="MT"){
            this.map.zoom = 9;
            this.map.latitude =  -55.5716547;
            this.map.longitude =  -12.2115009;
        }
        else if(this.selectedFilter.code=="MS"){
            this.map.zoom = 10;
            this.map.latitude =  -54.4794731;
            this.map.longitude =  -19.5852564;
        }
        else if(this.selectedFilter.code=="MG"){
            this.map.zoom = 11;
            this.map.latitude =  -44.1588654;
            this.map.longitude =  -18.5264844;
        }
        else if(this.selectedFilter.code=="PA"){
            this.map.zoom = 10;
            this.map.latitude =  -52.8973006;
            this.map.longitude =  -4.7493933;
        }
        else if(this.selectedFilter.code=="PB"){
            this.map.zoom = 10;
            this.map.latitude =  -36.7246845;
            this.map.longitude =  -7.1219366;
        }
        else if(this.selectedFilter.code=="PR"){
            this.map.zoom = 11;
            this.map.latitude =  -70.5264976;
            this.map.longitude =  -9.0478679;
        }
        else if(this.selectedFilter.code=="PE"){
            this.map.zoom = 9;
            this.map.latitude =  -37.5919699;
            this.map.longitude =  -8.4116316;
        }
        else if(this.selectedFilter.code=="PL"){
            this.map.zoom = 7;
            this.map.latitude =  -42.5043787;
            this.map.longitude =  -7.6992782;
        }
        else if(this.selectedFilter.code=="RJ"){
            this.map.zoom = 12;
            this.map.latitude =  -43.2093727;
            this.map.longitude =  -22.9110137;
        }
        else if(this.selectedFilter.code=="RN"){
            this.map.zoom = 9;
            this.map.latitude =  -36.4781776;
            this.map.longitude =  -5.6781175;
        }
        else if(this.selectedFilter.code=="RS"){
            this.map.zoom = 9;
            this.map.latitude =  -53.7680577;
            this.map.longitude =  -29.8425284;
        }
        else if(this.selectedFilter.code=="RO"){
            this.map.zoom = 11;
            this.map.latitude =  -62.8277863;
            this.map.longitude =  -10.943145;
        }
        else if(this.selectedFilter.code=="RR"){
            this.map.zoom = 11;
            this.map.latitude =  -61.3631922;
            this.map.longitude =  2.135138;
        }
        else if(this.selectedFilter.code=="SC"){
            this.map.zoom = 9;
            this.map.latitude =  -51.114965;
            this.map.longitude =  -27.0628367;
        }
        else if(this.selectedFilter.code=="SP"){
            this.map.zoom = 9;
            this.map.latitude =  -49.0232348;
            this.map.longitude =  -21.9549806;
        }
        else if(this.selectedFilter.code=="SER"){
            this.map.zoom = 12;
            this.map.latitude =  -37.3773519;
            this.map.longitude =  -10.6743911;
        }
        else if(this.selectedFilter.code=="TO"){
            this.map.zoom = 11;
            this.map.latitude =  -48.3716912;
            this.map.longitude =  -10.8855129;
        }
    }

    applyFilters(){
        console.log(this.selectedFilter);
        let include = true;
        this.filteredRevisions = this.allRevisions.filter(revision=>{
            if(this.selectedCriteria=='active'){
                if(revision.client||revision.property||revision.registry){
                    if(revision.relations[2].length==0){
                        return false;
                    }
                }
            }
            if(this.selectedFilter&&this.selectedFilter.code!=="BR"){
                let filteredArea;
                if(this.selectedFilter.code=="N")
                    filteredArea = North.geometries[0].coordinates[0][0];
                else if(this.selectedFilter.code=="NE")
                    filteredArea = NordEast.geometries[0].coordinates[3][0];
                else if(this.selectedFilter.code=="CO")
                    filteredArea = CentralWest.coordinates[0][0];
                else if(this.selectedFilter.code=="SE")
                    filteredArea = SouthEast.geometries[0].coordinates[1][0];
                else if(this.selectedFilter.code=="S")
                    filteredArea = South.geometries[0].coordinates[0][0];
                else if(this.selectedFilter.code=="AC"){
                    filteredArea = Acre.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="AL"){
                    filteredArea = Alagoas.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="AP"){
                    filteredArea = Amapa.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="AM"){
                    filteredArea = Amazonas.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="BA"){
                    filteredArea = Bahia.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="CE"){
                    filteredArea = Ceara.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="DF"){
                    filteredArea = DistritoFederal.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="ES"){
                    filteredArea = EspiritoSanto.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="GO"){
                    filteredArea = Goias.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="MA"){
                    filteredArea = Maranhao.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="MT"){
                    filteredArea = MattoGrosso.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="MS"){
                    filteredArea = MatoGrossoDoSul.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="MG"){
                    filteredArea = MinasGerais.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="PA"){
                    filteredArea = Para.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="PB"){
                    filteredArea = Paraiba.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="PR"){
                    filteredArea = Parana.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="PE"){
                    filteredArea = Pernambuco.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="PL"){
                    filteredArea = Piaui.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="RJ"){
                    filteredArea = RioDeJaneiro.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="RN"){
                    filteredArea = RioGrandeDoNorte.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="RS"){
                    filteredArea = RioGrandeDoSul.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="RO"){
                    filteredArea = Rondonia.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="RR"){
                    filteredArea = Roraima.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="SC"){
                    filteredArea = SantaCatarina.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="SP"){
                    filteredArea = SaoPaulo.geometries[0].coordinates[0][0];
                }
                else if(this.selectedFilter.code=="SER"){
                    filteredArea = Sergipe.coordinates[0][0];
                }
                else if(this.selectedFilter.code=="TO"){
                    filteredArea = Tocantis.geometries[0].coordinates[0][0];
                }
                let entity = revision.operation||revision.registry||revision.property;
                if(entity&&entity.coordinates){
                    //let coordinates = JSON.parse(entity.coordinates)[0].coordinates|JSON.parse(entity.coordinates);
                    let coordinates = JSON.parse(entity.coordinates);
                    if(coordinates[0].coordinates){
                        coordinates = coordinates[0].coordinates;
                    }
                    console.log(coordinates);
                    if(!this.isInsidePolygon(this.map.getCenter([coordinates]),filteredArea)){
                        return false;
                    }
                }else{
                    return false;
                }
            }
            if(this.selectedValue.length>0){
                console.log("property filtered");
                if(revision.property&&revision.relations[4].length==0){
                    return false;
                }
            }
            if(this.selectedValue2.length>0){
                console.log("registry filtered");
                if(revision.registry&&revision.relations[4].length==0)
                    return false;
            }
            if(this.selectedComesem===true){
                if(revision.operation&&revision.relations[3].length==0)
                    return false
            }
            if(this.selectedComesem===false){
                if(revision.operation&&revision.relations[3].length>0)
                    return false
            }
            if(this.selectedGarantia===true){
                if(revision.operation&&revision.relations[1].length==0)
                    return false
            }
            if(this.selectedGarantia===false){
                if(revision.operation&&revision.relations[1].length>0)
                    return false
            }
            if(this.selectedAgricola===true&&this.selectedAgricolas&&this.selectedAgricolas.length>0&&revision.operation){
                var isCropPresent = this.selectedAgricolas.filter((option)=>{
                    if(option.code==revision.operation.crop)
                        return true;
                    return false;
                });
                if(isCropPresent.length==0)
                    return false;
            }
            if(this.selectedAgricola===false&&this.selectedAgricolas&&this.selectedAgricolas.length>0&&revision.operation){
                var isCropPresent = this.selectedAgricolas.filter((option)=>{
                    if(option.code==revision.operation.crop)
                        return true;
                    return false;
                });
                if(isCropPresent.length>0)
                    return false;
            }
            if(this.selectedValor===true&&this.selectedValoras&&this.selectedValoras.length>0&&revision.guarantee){
                var isTypePresent = this.selectedValoras.filter((option)=>{
                    if(option.code==revision.guarantee.guaranteeType)
                        return true;
                    return false;
                });
                if(isTypePresent.length==0)
                    return false;
            }
            if(this.selectedValor===false&&this.selectedValoras&&this.selectedValoras.length>0&&revision.guarantee){
                var isTypePresent = this.selectedValoras.filter((option)=>{
                    if(option.code==revision.guarantee.guaranteeType)
                        return true;
                    return false;
                });
                if(isTypePresent.length>0)
                    return false;
            }
            return true;
        });
        //console.log(this.filteredRevisions);
        //console.log(this.allRevisions);
        this.calculateKPI();
        this.showOnMap(this.filteredRevisions);
    }
}
