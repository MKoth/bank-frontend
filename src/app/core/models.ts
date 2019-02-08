export class Client {
  alertsCounter: number;
  attentionsCounter: number;
  cellPhone: string;
  cpfcnpj: string;
  createdAt: string;
  email: string;
  hasEmbargo: boolean;
  hasSlaveWork: boolean;
  id: number;
  name: string;
  phoneNumber: string;
  updatedAt: string;
}
// tslint:disable-next-line:max-classes-per-file
export class Thing{
  key:string;
  type: string;
  createdAt: string;
  updateAt: string;
  id: number;
  audsat_id: string;
  revisions:number[];
}
export class Property {
  accessGuide: string;
  alertsCounter: number;
  area: number;
  attentionsCounter: number;
  car: string;
  city: string;
  code: string;
  complement: string;
  coordinates: any;
  createdAt: any;
  fiscalModule: number;
  id: number;
  inclusionDate: any;
  name: string;
  restrition: boolean;
  type: string;
  uf: string;
  updatedAt: any;
  valuationStatus: string;
  valuationStatusSetAt: any;
}

// export class Operations {
//   code: string;
//   createdAt: any;
//   cultivation: string;
//   fiscalizationStatus: string;
//   fiscalizationStatusSetAt: any;
//   id: number;
//   inclusionDate: any;
//   name: string;
//   type: string;
//   updatedAt: any;
//   valuationStatusSetAt: any;
// }
export class Operations {
  code: string;
  createdAt: any;
  crop: string;
  fiscalizationStatus: string;
  fiscalizationStatusSetAt: any;
  id: number;
  revision:number;
  key:string;
  name: string;
  operationType:any;
  type: string;
  updatedAt: any;
  valuationStatusSetAt: any;
  coordinates: any;
}

export class Guarantee {
  id:number;
  createdAt:any;
  updateAt:any;
  name:string;
  guaranteeType:string;
  otherType:string;
  value:string;
  timeSpanFinal:any;
  timeSpanInitial:any;
}

export class Registry {
  accessGuide: string;
  area: number;
  city: string;
  coordinates: string;
  createdAt: string;
  id: string;
  code:string;
  name: string;
  uf: string;
  key:any;
  type:any;
  updatedAt: string;
  valuationStatus: string;
  valuationStatusSetAt: string;
}



export class GuaranteeExport {
  ID:any;
  Data_de_Cadastro:any;
  Nome_da_Garantia:any;
  Vigência_Inicial:any;
  Vigência_Final:any;
  Tipo:any;
  Outros:any
  Valor:any;
}

export class stepsRevision {

  crevision: Revision;
  mrevision: Revision;
  prevision: Revision;

}

export class PropertyExport {
  Codigo: string;
  CPF_CNPJ: string;
  Complemento: string;
  Area: number;
  Ponto_Atendimento: Unit[];
  Data_Cadastro: Date;
  CAR: string;
  Situacao: string;
}

export class OperationsExport {
  Codigo: any;
  CPF_CNPJ: any;
  Complemento: any;
  Cultura: any;
  Area: any;
  Ponto_Atendimento: any;
  Data_Cadastro: any;
  Situacao: any;
  Situacao_Da_Fiscalizacao: any;
}

export class RegistryExport {
  Codigo: string;
  // CPF_CNPJ: string;
  Estado: string;
  Area: number;
  // Ponto_Atendimento: Unit[];
  // Data_Cadastro: Date;
  // CAR: string;
  Situacao: string;
}

// tslint:disable-next-line:max-classes-per-file
export class AlertaRSA {
  pid: number;
  CAR: string;
  property_name: string;
  alert_name: string;
  severity: string;
  condition: string;
  creation_date: number;
}
// tslint:disable-next-line:max-classes-per-file
export class ClientExport {
  ID: number;
  Nome: string;
  CPF_CNPJ: string;
  Email: string;
  Situação: string;
  Telefone: string;
  Celular: string;
  Agência: string;
  Atenções: number;
  Alertas: number;
}

export class userRole{
  roleid:number;
  tag:string;
  units:number[];
}
// tslint:disable-next-line:max-classes-per-file
export class User {
  id: number;
  createdAt: Date;
  updateAt:Date;
  hash_foto:string;
  revisions:number[];
  userId:number;
  email: string;
  // name: string;
  // cpf: string;
  // company:string;
  // companyCnpj:string;
  // phoneNumber: string;
  // cellPhone: string;
  // status:string;
  // roles: userRole[];
  // situacao: string;
  // recebe_email_monitoramento: string;
}
// tslint:disable-next-line:max-classes-per-file
export class UserExport {
  ID: number;
  Nome: string;
  CPF: string;
  Email: string;
  Situação: string;
  Telefone: string;
  Celular: string;
  Perfil: string;
  Poontos_de_Atendimento: string;
  Recebe_Email_Monitoramento: string;
}

export const modelStatus = [
  { label: "Selecione", value: "" },
  { label: "Aprovado", value: "Aprovado" },
  { label: "Ativo", value: "Ativo" },
  { label: "Inativo", value: "Inativo" },
  { label: "Protótipo", value: "Protótipo" }
];
export const userStatus = [
  { label: "Selecione", value: "" },
  { label: "Ativo", value: "Ativo" },
  { label: "Inativo", value: "Inativo" }
];

export const modelTypeGuarantee = [
  { label: 'Selecione', value: "" },
  { label: 'Hipotecária', value: 'Hipotecária' },
  { label: 'Outros', value: 'Outros' },
];
export const modelFiscalizationStatus = [
  { label: 'Selecione', value: "" },
  { label: 'Solicitada', value: 'Solicitada' },
  { label: 'Não Solicitada', value: 'Não Solicitada' },
];
export const modelUserPerfil = [
  { label: "", value:{label:"", number:""}},
  { label: "Administrador", value:{label:"GC_ADMIN", number: 100}},
  { label: "Gerente", value:{label:"GC_GERENTE", number: 101}},
  { label: "Analista", value:{label:"GC_ANALISTA", number: 102}},
  { label: "Tecnico", value:{label:"GC_TECNICO", number: 103}},
  { label: "Prestador", value:{label:"GC_PRESTADOR", number: 104}}
];

export const modelUnit = [
  { label: "00001", value: "00001" },
  { label: "00002", value: "00002" },
  { label: "00003", value: "00003" },
  { label: "00004", value: "00004" }
];

export const modelUserPerfilNumber = [
  { label: "", value: "" },
  { label: "Administrador", value: 100 },
  { label: "Gerente", value: 101 },
  { label: "Analista", value: 102 },
  { label: "Tecnico", value: 103 },
  { label: "Prestador", value: 104 },
];

export const modelCulture = [
    {label:"Selecione", value:""},
    {label:"Trigo", value:"Trigo"},
    {label:"Arroz", value:"Arroz"},
    {label:"Feijão", value:"Feijão"},
    {label:"Algodão", value:"Algodão"},
    {label:"Café", value:"Café"},
    {label:"Laranja", value:"Laranja"},
    {label:"Sorgo", value:"Sorgo"},
    {label:"Batata Inglesa", value:"Batata Inglesa"},
    {label:"Cana-de-açucar", value:"Cana-de-açucar"},
    {label:"Soja", value:"Soja"},
    {label:"Milho", value:"Milho"},
    {label:"Cevada", value:"Cevada"},
    {label:"Outros", value:"Outros"}
]

export const modelOperationType = [
  {label:"Selecione", value:""},
  {label:"Custeio agrícola", value:"Custeio agrícola"},
  {label:"Outros", value:"Outros"}
];

export const modelPropertyStatus = [
  { label: "", value: "" },
  { label: "Protótipo", value: "Protótipo" },
  { label: "Aprovado", value: "Aprovado" },
  { label: "Valoração solicitada", value: "Valoração solicitada" },
  { label: "Valoração entregue", value: "Valoração entregue" }
];

//MOCK DATA FOR ALERTS
export const alertMock = [
  {
    pid: 200,
    CAR: "RO-1100015- AD008600E2B1418DA9033830699C1754",
    property_name: "Imovel 2",
    alert_name: "Risco SocioAmbiental",
    severity: "Proximidade áreas de risco",
    condition: "",
    creation_date: 1542318910622
  },
  {
    pid: 201,
    CAR: "SP-1100015- AD025555E2B1418DA9063830699AB005",
    property_name: "Imovel 3",
    alert_name: "Risco SocioAmbiental",
    severity: "Proximidade áreas de risco",
    condition: "",
    creation_date: 1542318910622
  },
  {
    pid: 202,
    CAR: "RJ-1100015- AD008600E2B1418DA87778306999642A",
    property_name: "Imovel 4",
    alert_name: "Risco SocioAmbiental",
    severity: "Proximidade áreas de risco",
    condition: "",
    creation_date: 1542318910622
  },
  {
    pid: 203,
    CAR: "SP-2100051- ED0012F7E2B1418DA7654830699E1654",
    property_name: "Imovel 5",
    alert_name: "Risco SocioAmbiental",
    severity: "Proximidade áreas de risco",
    condition: "",
    creation_date: 1542318910622
  }
];
export class Unit{
  createdAt: string;
  unitId: number;
  unitLabel: string;
  updatedAt: string;
  userRoleId: number;
}
export class Document{
  id: number;
  name: string;
  size: number;
}
// tslint:disable-next-line:max-classes-per-file
export class Revision {
  alertsCounter: number;
  attentionsCounter: number;
  statusAuthor: string;
  statusSetAt: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  revisionStatus: string;
  status: string;
  hasEmbargo: boolean;
  hasSlaveWork: boolean;
  // units: Array<number>;
  thing:any;
  units: Unit[];
  user: any;
  client: Client;
  property: Property;
  guarantee: Guarantee;
  documents: Document[];
  registry: Registry;
  operation: Operations;
  relations: any[];
  //relation: Relations;
  //related: Related;
}

/**
 * Entities skels
 */
export const clientRevisionSkel:any  = {
  client: {
    name: "",
    cpfcnpj: "",
    email: ""
  },
  user: {},
  units: []
}

export const propertyRevisionSkel:any  = {
  property: {
    name: "",
    car: "",
    complement: ""
  },
  user: {},
  units: []
}

export const registryRevisionSkel:any  = {
  registry: {
    name: "",
    code: ""
  },
  user: {},
  units: []
}

export const operationsRevisionSkel:any = {
  operation:{
    acessGuide:"",
    complement:"",
    crop:"",
    operationType:"",
    timeSpanInitial:"",
    timeSpanFinal:"",
    uf:"",
    municipio:"",
    code:""
    /*name:"",
    code:"",
    type:"",
    crop:""*/
  },
  user: {},
  units: []
}

export const guaranteeRevisionSkel:any = {
  guarantee:{
    name:"",
    guaranteeType:"Hipotecária",
    value:"",
    timeSpanInitial:"",
    timeSpanFinal:"",
    otherType:""
  },
  user: {},
  units: []
}

export const rsaAlertSkel:any = {
  database:"",
  type:"",
  metric:"",
  criticality:"",
  value:0
}
