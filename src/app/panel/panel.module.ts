import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutesModule } from './panel.routes.module';
import { PanelComponent } from './panel.component';
import { MessageService } from 'primeng/components/common/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { MapModule } from '../core/map/map.module';
import { KmlShapeModule } from '../core/map/kmlShapeImport/kmlshape.module';
import { PanelService } from './panel.service';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ButtonModule } from 'primeng/button';


@NgModule({
    imports: [
        CommonModule,
        PanelRoutesModule,
        SelectButtonModule,
        DropdownModule,
        FormsModule,
        CheckboxModule,
        MultiSelectModule,
        MapModule,
        KmlShapeModule,
        CardModule,
        TriStateCheckboxModule,
        ButtonModule
    ],
    declarations: [
        PanelComponent
    ],
    exports: [
        PanelComponent
    ],
    providers: [
        MessageService,
        PanelService
    ]
})

export class PanelModuleApp {};