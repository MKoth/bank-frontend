import { RsaConfigComponent } from './rsa-config/rsa-config.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsComponent } from './alerts.component';
import { AlertsearchComponent } from './alertsearch/alertsearch.component';
import { AlertRoutesModule } from "./alert.routes.module"

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
import { FieldsetModule } from 'primeng/fieldset';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { AlerttableComponent } from './alerttable/alerttable.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  imports: [
    CommonModule,
    AlertRoutesModule,
    CardModule,
    RadioButtonModule,
    TableModule,
    CoreModule,
    TabViewModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    PanelMenuModule,
    StepsModule,
    InputTextModule,
    DropdownModule,
    ContextMenuModule,
    LightboxModule,
    DialogModule,
    FileUploadModule,
    ScrollPanelModule,
    MultiSelectModule,
    FieldsetModule,
    AngularOpenlayersModule,
    ProgressSpinnerModule
  ],
  declarations: [
    AlertsComponent,
    AlertsearchComponent,
    AlerttableComponent,
    RsaConfigComponent
  ],
  exports: [
    AlertsComponent,
    AlertsearchComponent,
    RsaConfigComponent
  ],
  providers: [
  ]
})
export class AlertsModule { }
