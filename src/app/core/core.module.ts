import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { EntitydetailsComponent } from './entitydetails/entitydetails.component';
import { OperationstabComponent } from './operationstab/operationstab.component';
import { PropertytabComponent } from './propertytab/propertytab.component';
import { WarrantytabComponent } from './warrantytab/warrantytab.component';
import { RegistrytabComponent } from './registrytab/registrytab.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { PanelMenuModule } from "primeng/panelmenu";
import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { TableModule } from "primeng/table";
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from "primeng/inputtext";
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';


import { EntityinfoboxComponent } from './entityinfobox/entityinfobox.component';
import { AcessComponent } from './acess.component';
import { ErrorComponent } from './error.component';
import { AlertpanelComponent } from './alertpanel/alertpanel.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AlertdetailsComponent } from './alertpanel/alertdetails/alertdetails.component';
import { MapModule } from './map/map.module';
import { KmlShapeModule } from './map/kmlShapeImport/kmlshape.module';
import { ClienttabComponent } from './clienttab/clienttab.component';
import { EntitycardComponent } from './entitycard/entitycard.component';
import { DashBoardComponent,SafePipe } from './dashboard/dashboard.component';


// import { UnitsComponent } from './units/units.component';
import { PhoneMaskComponent } from './phone-mask/phone-mask.component';
import { CpfMaskComponent } from './cpf-mask/cpf-mask.component';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';

import { Client, Revision } from './../core/models';
import { DocumentsComponent } from './documents/documents.component';

import { CreateClientRelatedToComponent } from './create-client-related-to/create-client-related-to.component';
import { CreatePropertyRelatedToComponent } from './create-property-related-to/create-property-related-to.component';
import { CreateRegistryRelatedToComponent } from './create-registry-related-to/create-registry-related-to.component';
import { CreateGuaranteeRelatedToComponent } from './create-guarantee-related-to/create-guarantee-related-to.component';
import { RsaDetailsComponent } from './rsaDetails/rsaDetails.component';
import { RiskAnalysisComponent } from './riskAnalysis/riskAnalysis.component';
import { TabViewModule } from 'primeng/tabview';
import { RelationsTabsComponent } from './relations-tabs/relations-tabs.component';
import { ClientWizardStepComponent } from './client-wizard-step/client-wizard-step.component';
import { PropertyWizardStepComponent } from './property-wizard-step/property-wizard-step.component';
import { RegistryWizardStepComponent } from './registry-wizard-step/registry-wizard-step.component';
import { GuaranteeWizardEmbedComponent } from './guarantee-wizard-embed/guarantee-wizard-embed.component';
import { OperationWizardStepComponent } from './operations-wizard-step/operations-wizard-step.component';
import { GlebasWizardStepComponent } from './glebas-wizard-step/glebas-wizard-step.component';


import { AlertClientComponent } from './alert-client/alert-client.component';
import { AlertClientDetailsComponent } from './alert-client/alert-client-details/alert-client-details.component';
import { CreateGuaranteeRelatedToRegistryComponent } from './create-guarantee-related-to/create-guarantee-related-to-registry/create-guarantee-related-to-registry.component';
import { CreateGuaranteeRelatedToPropertyComponent } from './create-guarantee-related-to/create-guarantee-related-to-property/create-guarantee-related-to-property.component';
import { CreateGuaranteeRelatedToClientComponent } from './create-guarantee-related-to/create-guarantee-related-to-client/create-guarantee-related-to-client.component';
import { CreateOperationRelatedToComponent } from './create-operation-related-to/create-operation-related-to.component';
import { AlertOperationComponent } from './alert-operation/alert-operation.component';
import { AlertGuaranteeComponent } from './alert-guarantee/alert-guarantee.component';
import { AlertRegistryComponent } from './alert-registry/alert-registry.component';
import { AlertRegistryDetailsComponent } from './alert-registry/alert-registry-details/alert-registry-details.component';



@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    CardModule,
    PanelMenuModule,
    ChartModule,
    MenubarModule,
    ToastModule,
    ScrollPanelModule,
    MapModule,
    KmlShapeModule,
    TextMaskModule,
    TableModule,
    DialogModule,
    FormsModule,
    InputMaskModule,
    MultiSelectModule,
    RadioButtonModule,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    TabViewModule,
    CarouselModule,
    CheckboxModule,
    CurrencyMaskModule,
    CalendarModule,
    InputTextareaModule,
    KeyFilterModule
  ],
  declarations: [
    EntitydetailsComponent,
    OperationstabComponent,
    PropertytabComponent,
    WarrantytabComponent,
    RegistrytabComponent,
    EntityinfoboxComponent,
    AcessComponent,
    ErrorComponent,
    AlertpanelComponent,
    AlertdetailsComponent,
    ClienttabComponent,
    EntitycardComponent,
    // UnitsComponent,
    PhoneMaskComponent,
    CpfMaskComponent,
    CreateClientRelatedToComponent,
    DocumentsComponent,
    CreatePropertyRelatedToComponent,
    CreateRegistryRelatedToComponent,
    RsaDetailsComponent,
    RiskAnalysisComponent,
    CreateGuaranteeRelatedToComponent,
    DashBoardComponent,
    SafePipe,
    RelationsTabsComponent,
    ClientWizardStepComponent,
    PropertyWizardStepComponent,
    RegistryWizardStepComponent,
    GuaranteeWizardEmbedComponent,
    OperationWizardStepComponent,
    GlebasWizardStepComponent,
    AlertClientComponent,
    AlertClientDetailsComponent,
    CreateGuaranteeRelatedToRegistryComponent,
    CreateGuaranteeRelatedToPropertyComponent,
    CreateGuaranteeRelatedToClientComponent,
    CreateOperationRelatedToComponent,
    AlertOperationComponent,
    AlertGuaranteeComponent,
    AlertRegistryComponent,
    AlertRegistryDetailsComponent
  ],
  exports: [
    EntitydetailsComponent,
    OperationstabComponent,
    PropertytabComponent,
    WarrantytabComponent,
    RegistrytabComponent,
    ClienttabComponent,
    EntitycardComponent,
    ToastModule,
    AcessComponent,
    ErrorComponent,
    AlertpanelComponent,
    AlertdetailsComponent,
    MapModule,
    KmlShapeModule,
    DocumentsComponent,
    CreateClientRelatedToComponent,
    CreatePropertyRelatedToComponent,
    CreateRegistryRelatedToComponent,
    CreateGuaranteeRelatedToComponent,
    PhoneMaskComponent,
    CpfMaskComponent,
    RsaDetailsComponent,
    RiskAnalysisComponent,
    DashBoardComponent,
    SafePipe,
    RelationsTabsComponent,
    ClientWizardStepComponent,
    PropertyWizardStepComponent,
    OperationWizardStepComponent,
    RegistryWizardStepComponent,
    GlebasWizardStepComponent,
    AlertClientComponent,
    AlertClientDetailsComponent,
    AlertRegistryComponent,
    AlertRegistryDetailsComponent
  ]
})
export class CoreModule { }
