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
import {shp} from 'shpjs';
import {FileUploadModule} from 'primeng/fileupload';
import { KmlShapeComponent } from '../kmlShapeImport/kmlshape.component';




@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TabViewModule,
    CardModule,
    StepsModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    ToastModule,
    FileUploadModule




  ],
  declarations: [
    KmlShapeComponent,

  ],
  exports: [
  KmlShapeComponent
  ],
  providers: [

  ]
})
export class KmlShapeModule { }
