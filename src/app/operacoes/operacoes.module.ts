import { TextMaskModule } from 'angular2-text-mask';
import { StepsOperacoesComponent } from './stepsoperacoes/stepsoperacoes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacoesRoutesModule } from './operacoes.routes.module';
import { ImportoperacoesComponent } from './importoperacoes/importoperacoes.component';
import { OperacoesComponent } from "./operacoes.component";
import { IncludeoperacoesComponent } from "./includeoperacoes/includeoperacoes.component";
import { OperacoestableComponent } from './operacoestable/operacoestable.component';
import { OperacoesTableAdjustableComponent } from './operacoesadjustabletable/operacoestableadjustable.component';
import { OperacoesTable1Component } from './operacoestable1/operacoestable1.component';
import { OperacoesTable2Component } from './operacoestable2/operacoestable2.component';
import { OperacoesTable3Component } from './operacoestable3/operacoestable3.component';
import { OperacoesTable4Component } from './operacoestable4/operacoestable4.component';
import { OperacoesTable5Component } from './operacoestable5/operacoestable5.component';
import { OperacoessearchComponent } from './operacoessearch/operacoessearch.component';
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
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ChartModule } from 'primeng/chart';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {MenuModule} from 'primeng/menu';
import {InputMaskModule} from 'primeng/inputmask';
import {SelectItem, MessageService} from 'primeng/components/common/api';
import {Message} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

import { OperacoesdetailsComponent } from './operacoesdetails/operacoesdetails.component';
import { OperacoestaboneComponent } from './operacoestabone/operacoestabone.component';
import { OperacoesrsadetailsComponent } from './operacoesrsadetails/operacoesrsadetails.component';
import { OperacoesUploadFilesComponent } from './operacoesuploadfiles/operacoesuploadfiles.component';
import { OperacoesService } from './operacoes.service';


@NgModule({
  imports: [
    CommonModule,
    OperacoesRoutesModule,
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
    FieldsetModule,
    AngularOpenlayersModule,
    CalendarModule,
    MenuModule,
    InputMaskModule,
    ToastModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ChartModule,
    NgxChartsModule,
    TextMaskModule
  ],
  declarations: [
    ImportoperacoesComponent,
    OperacoesComponent,
    OperacoestableComponent,
    OperacoesTableAdjustableComponent,
    OperacoesTable1Component,
    OperacoesTable2Component,
    OperacoesTable3Component,
    OperacoesTable4Component,
    OperacoesTable5Component,
    OperacoessearchComponent,
    OperacoestaboneComponent,
    OperacoesdetailsComponent,
    OperacoesrsadetailsComponent,
    OperacoesUploadFilesComponent,
    IncludeoperacoesComponent,
    StepsOperacoesComponent
  ],
  exports: [
    ImportoperacoesComponent,
    OperacoesComponent,
    OperacoestableComponent,
    OperacoesTableAdjustableComponent,
    OperacoesTable1Component,
    OperacoesTable2Component,
    OperacoesTable3Component,
    OperacoesTable4Component,
    OperacoesTable5Component,
    OperacoessearchComponent,
    OperacoesdetailsComponent,
    OperacoesUploadFilesComponent,
    IncludeoperacoesComponent,
    StepsOperacoesComponent,
    OperacoesdetailsComponent,
    OperacoesrsadetailsComponent,
    OperacoestaboneComponent
  ],
  providers: [
    MessageService,
    OperacoesService
  ]
})
export class OperacoesModule { }
