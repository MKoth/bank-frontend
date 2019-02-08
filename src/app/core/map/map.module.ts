import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { CardModule } from "primeng/card";
import { StepsModule } from "primeng/steps";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from "primeng/panel";
import {ToastModule} from 'primeng/toast';
import { MenuItem } from "primeng/api";
import {SelectItem} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ContextMenuModule } from 'primeng/contextmenu';
import { LightboxModule } from 'primeng/lightbox';
import { DialogModule } from 'primeng/dialog';
import {InputMaskModule} from 'primeng/inputmask';
import { ChartModule } from 'primeng/chart';
import { BrowserModule }    from '@angular/platform-browser';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { SecurityModule } from './../../security/security.module';
import { MapComponent } from '../map/map.component';
import {KmlShapeModule} from '../map/kmlShapeImport/kmlshape.module';
import {FileUploadModule} from 'primeng/fileupload';
import {shp} from 'shpjs';


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
    DropdownModule,
    FormsModule,
    RadioButtonModule,
    ContextMenuModule,
    LightboxModule,
    DialogModule,
    ChartModule,
    AngularOpenlayersModule,
    SecurityModule,
    ToastModule,
    InputMaskModule,
    FileUploadModule,
    KmlShapeModule




  ],
  declarations: [
    MapComponent,

  ],
  exports: [
  MapComponent
  ],
  providers: [

  ]
})
export class MapModule { }
