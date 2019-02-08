import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarantiasRoutesModule } from './garantias.routes.module';
import { ImportgarantiasComponent } from './importgarantias/importgarantias.component';
import { GarantiasComponent } from "./garantias.component";
import { IncludegarantiasComponent } from "./includegarantias/includegarantias.component";
import { GarantiassearchComponent } from './garantiassearch/garantiassearch.component';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { CoreModule } from '../core/core.module';
import { TabViewModule } from "primeng/tabview";
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from "primeng/button";
import { PanelMenuModule } from "primeng/panelmenu"
import { StepsModule } from "primeng/steps";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from 'primeng/dropdown';
import { ContextMenuModule } from 'primeng/contextmenu';
import { LightboxModule } from 'primeng/lightbox';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MultiSelectModule } from 'primeng/multiselect';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {FieldsetModule} from 'primeng/fieldset';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {CalendarModule} from 'primeng/calendar';
import {ReactiveFormsModule} from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MapModule} from '../core/map/map.module';
import {KmlShapeModule} from '../core/map/kmlShapeImport/kmlshape.module';
import { CurrencyMaskModule } from "ng2-currency-mask";

import {MenuModule} from 'primeng/menu';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import { KeyFilterModule } from 'primeng/keyfilter';

import { GarantiastableComponent } from './garantiastable/garantiastable.component';
import { GarantiasdetailsComponent } from './garantiasdetails/garantiasdetails.component';
import { GarantiastaboneComponent } from './garantiastabone/garantiastabone.component';
import { GarantiasrsadetailsComponent } from './garantiasrsadetails/garantiasrsadetails.component';
import { GarantiasService } from './garantias.service';
import { ClientsModule } from '../clients/clients.module';
import { SecurityService } from './../security/security.service';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    GarantiasRoutesModule,
    CardModule,
    RadioButtonModule,
    TableModule,
    TabViewModule,
    CoreModule,
    FormsModule,
    PanelMenuModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    StepsModule,
    MultiSelectModule,
    DropdownModule,
    ContextMenuModule,
    LightboxModule,
    DialogModule,
    FileUploadModule,
    ScrollPanelModule,
    ProgressSpinnerModule,
    FieldsetModule,
    AngularOpenlayersModule,
    CalendarModule,
    MenuModule,
    InputMaskModule,
    ToastModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    MapModule,
    KmlShapeModule,
    ClientsModule,
    CurrencyMaskModule,
    KeyFilterModule,
    TextMaskModule
  ],
  declarations: [
    ImportgarantiasComponent,
    GarantiasComponent,
    GarantiastableComponent,
    GarantiassearchComponent,
    GarantiasdetailsComponent,
    GarantiastaboneComponent,
    GarantiasrsadetailsComponent,
    IncludegarantiasComponent
  ],
  exports: [
    ImportgarantiasComponent,
    GarantiasComponent,
    GarantiastableComponent,
    GarantiassearchComponent,
    GarantiasdetailsComponent,
    IncludegarantiasComponent,
    GarantiasrsadetailsComponent,
    GarantiastaboneComponent
  ],
  providers: [
    MessageService,
    GarantiasService,
    SecurityService
  ]
})
export class GarantiasModule { }
