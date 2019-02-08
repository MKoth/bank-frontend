import { AuthGuard } from './../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from "./clients.component";
import { ClientsearchComponent } from './clientsearch/clientsearch.component';

const routes: Routes = [
  { path: 'buscarcliente', component: ClientsearchComponent, canActivate: [AuthGuard]},
  { path: 'cliente', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: 'cliente/:tid', component: ClientsComponent, canActivate: [AuthGuard] }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ClientRoutesModule { }
