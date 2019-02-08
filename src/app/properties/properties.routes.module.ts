import { AuthGuard } from './../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from "./properties.component";
import { PropertysearchComponent } from "./propertysearch/propertysearch.component";

const routes: Routes = [
  { path: "imovel", component: PropertiesComponent, canActivate: [AuthGuard] },
  { path: "imovel/:tid", component: PropertiesComponent, canActivate: [AuthGuard] },
  { path: "buscarimovel", component: PropertysearchComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PropertiesRoutesModule { }
