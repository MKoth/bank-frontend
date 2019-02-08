import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from "./settings/settings.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from "primeng/panel";
import { MenuItem } from "primeng/api";
import { TableModule } from "primeng/table";
import { UserTableComponent } from "./usertable/usertable.component";
import { UserSearchComponent } from "./usersearch/usersearch.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { UsersIncludComponent } from './user-include/userinclude.component';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { UserRoutesModule } from './users.routes.module';
import { UserEditComponent } from './usersedit/user-edit.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule, MultiSelectModule } from "primeng/primeng";
import { InplaceModule } from 'primeng/inplace';
import { CoreModule } from "../core/core.module";






@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ScrollPanelModule,
    DialogModule,
    RadioButtonModule,
    FormsModule,
    InputMaskModule,
    DropdownModule,
    UserRoutesModule,
    InplaceModule,
    MultiSelectModule

  ],
  declarations: [
    SettingsComponent, UserTableComponent, UserSearchComponent, UsersIncludComponent, UserEditComponent
  ],
  exports: [
    SettingsComponent, UserTableComponent, UserSearchComponent, UsersIncludComponent, UserEditComponent
  ]
})

export class UsersModule { }
