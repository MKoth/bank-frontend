import { AlertpanelComponent } from './../core/alertpanel/alertpanel.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientsearchComponent } from "./clientsearch/clientsearch.component";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { TabViewModule } from "primeng/tabview";
import { StepsModule } from "primeng/steps";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from "primeng/panel";
import { ToastModule } from 'primeng/toast';
import { MenuItem } from "primeng/api";
import { ClientdetailsComponent } from "./clientdetails/clientdetails.component";
import { ClientsComponent } from "./clients.component";
import { ClienttableComponent } from './clienttable/clienttable.component';
import { ClientsService } from "./clients.service";
import { SelectItem, MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ContextMenuModule } from 'primeng/contextmenu';
import { LightboxModule } from 'primeng/lightbox';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputMaskModule } from 'primeng/inputmask';
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import { KeyFilterModule } from 'primeng/keyfilter';
// import {RelatePropertiesModule} from "../properties/relateproperty/relateproperty.module";

import { IncludeclientComponent } from './includeclient/includeclient.component';
import { ImportclientComponent } from './importclient/importclient.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { SecurityModule } from './../security/security.module';
import { ClientRoutesModule } from './client.routes.module';
import { Client, Revision } from './../core/models';
import { CoreModule } from "../core/core.module";
import { MapModule } from "../core//map/map.module";
import {MultiSelectModule} from 'primeng/multiselect';
import { TextMaskModule } from 'angular2-text-mask';
// import { AddclientComponent } from './addclient/addclient.component';


@NgModule({
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    TabViewModule,
    StepsModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    TableModule,
    DropdownModule,
    FormsModule,
    RadioButtonModule,
    ContextMenuModule,
    LightboxModule,
    DialogModule,
    ProgressSpinnerModule,
    FileUploadModule,
    ScrollPanelModule,
    ChartModule,
    AngularOpenlayersModule,
    ClientRoutesModule,
    SecurityModule,
    CoreModule,
    ToastModule,
    InputMaskModule,
    HttpClientModule,
    CoreModule,
    MapModule,
    MultiSelectModule,
    SecurityModule,
    TextMaskModule,
    KeyFilterModule



  ],
  declarations: [
    ClientsComponent,
    ClientsearchComponent,
    ClientdetailsComponent,
    ClienttableComponent,
    IncludeclientComponent,
    ImportclientComponent


    // AddclientComponent

  ],
  exports: [
    ClientsComponent,
    ClientsearchComponent,
    ClientdetailsComponent,
    ClienttableComponent,
    IncludeclientComponent,
    ImportclientComponent,
    // AddclientComponent
  ],
  providers: [
    ClientsService,
    MessageService
  ]
})
export class ClientsModule { }
