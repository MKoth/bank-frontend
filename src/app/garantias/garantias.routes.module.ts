import { AuthGuard } from './../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarantiasComponent } from "./garantias.component";
import { GarantiassearchComponent } from "./garantiassearch/garantiassearch.component";

const routes: Routes = [
  { path: "garantia", component: GarantiasComponent, canActivate: [AuthGuard] },
  { path: "garantia/:tid", component: GarantiasComponent, canActivate: [AuthGuard] },
  { path: "buscargarantias", component: GarantiassearchComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class GarantiasRoutesModule { }
