import { CheckboxModule } from 'primeng/checkbox';
import { StepsMatriculaComponent } from './stepsmatricula/stepsmatricula.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaRoutesModule } from './matricula.routes.module';
import { ImportmatriculaComponent } from './importmatricula/importmatricula.component';
import { MatriculaComponent } from "./matricula.component";
import { IncludematriculaComponent } from "./includematricula/includematricula.component";
import { MatriculatableComponent } from './matriculatable/matriculatable.component';
import { MatriculasearchComponent } from './matriculasearch/matriculasearch.component';
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
import {FieldsetModule} from 'primeng/fieldset';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {CalendarModule} from 'primeng/calendar';
import {ReactiveFormsModule} from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CarouselModule} from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TextMaskModule } from 'angular2-text-mask';

import {MenuModule} from 'primeng/menu';
import {InputMaskModule} from 'primeng/inputmask';
import {SelectItem, MessageService} from 'primeng/components/common/api';
import {Message} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

import { MatriculadetailsComponent } from './matriculadetails/matriculadetails.component';
// import { MatriculaeditComponent } from './matriculaedit/matriculaedit.component';
import { MatriculataboneComponent } from './matriculatabone/marticulatabone.component';
import { MatricularsadetailsComponent } from './matricularsadetails/matricularsadetails.component';
// import { MatriculaUploadFilesComponent } from './matriculauploadfiles/matriculauploadfiles.component';
import { MatriculaService } from './matricula.service';


@NgModule({
  imports: [
    CommonModule,
    MatriculaRoutesModule,
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
    CarouselModule,
    CheckboxModule,
    ProgressSpinnerModule,
    TextMaskModule
  ],
  declarations: [
    ImportmatriculaComponent,
    MatriculaComponent,
    MatriculatableComponent,
    MatriculasearchComponent,
    MatriculadetailsComponent,
    MatriculataboneComponent,
    MatricularsadetailsComponent,
    IncludematriculaComponent,
    StepsMatriculaComponent
  ],
  exports: [
    ImportmatriculaComponent,
    MatriculaComponent,
    MatriculatableComponent,
    MatriculasearchComponent,
    MatriculadetailsComponent,
    IncludematriculaComponent,
    StepsMatriculaComponent,
    MatricularsadetailsComponent,
    MatriculataboneComponent
  ],
  providers: [
    MessageService,
    MatriculaService
  ]
})
export class MatriculaModule { }
