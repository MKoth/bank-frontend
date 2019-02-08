import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesRoutesModule } from './properties.routes.module';
import { ImportpropertyComponent } from './importproperty/importproperty.component';
import { PropertiesComponent } from "./properties.component";
import { IncludepropertiesComponent } from "./includeproperties/includeproperties.component";
import { PropertytableComponent } from './propertytable/propertytable.component';
import { PropertysearchComponent } from './propertysearch/propertysearch.component';
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
import { ProgressSpinnerModule} from 'primeng/progressspinner';
import { FieldsetModule} from 'primeng/fieldset';
import { AngularOpenlayersModule} from 'ngx-openlayers';
import { CalendarModule} from 'primeng/calendar';
import { ReactiveFormsModule} from '@angular/forms';
import { MessagesModule} from 'primeng/messages';
import { MessageModule} from 'primeng/message';
import { MapModule} from '../core/map/map.module';
import { KmlShapeModule} from '../core/map/kmlShapeImport/kmlshape.module';

import { MenuModule} from 'primeng/menu';
import { InputMaskModule} from 'primeng/inputmask';
import {SelectItem, MessageService} from 'primeng/components/common/api';
import {Message} from 'primeng/api';
import {ToastModule} from 'primeng/toast';


import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { PropertiesService } from './properties.service';
import { ClientsModule } from '../clients/clients.module';
import { SecurityService } from './../security/security.service';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  imports: [
    CommonModule,
    PropertiesRoutesModule,
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
    TextMaskModule
  ],
  declarations: [
    ImportpropertyComponent,
    PropertiesComponent,
    PropertytableComponent,
    PropertysearchComponent,
    PropertydetailsComponent,
    IncludepropertiesComponent
  ],
  exports: [
    ImportpropertyComponent,
    PropertiesComponent,
    PropertytableComponent,
    PropertysearchComponent,
    PropertydetailsComponent,
    IncludepropertiesComponent
 
  ],
  providers: [
    MessageService,
    PropertiesService,
    SecurityService
  ]
})
export class PropertiesModule { }
