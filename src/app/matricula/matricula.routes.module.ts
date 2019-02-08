import { AuthGuard } from './../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculaComponent } from "./matricula.component";
import { MatriculasearchComponent } from "./matriculasearch/matriculasearch.component";

const routes: Routes = [
  { path: "matricula", component: MatriculaComponent, canActivate: [AuthGuard] },
  { path: "matricula/:tid", component: MatriculaComponent, canActivate: [AuthGuard] },
  // { path: "buscarimatricula", component: MatriculasearchComponent, canActivate: [AuthGuard] }
  { path: "buscarmatricula", component: MatriculasearchComponent, canActivate: [AuthGuard] }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class MatriculaRoutesModule { }
