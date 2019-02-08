import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from "./settings/settings.component";
import { UserSearchComponent } from './usersearch/usersearch.component';
import { UserEditComponent } from './usersedit/user-edit.component';
import { AuthGuard } from './../security/auth.guard';

const routes: Routes = [
  { path: 'buscarusuario', component: UserSearchComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }, //renomear
  { path: "usuario/:uid", component: UserEditComponent, canActivate: [AuthGuard] }
  // { path: 'usuario/:uid', component: ClientsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutesModule { }
