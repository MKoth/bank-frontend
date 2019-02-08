import { AuthGuard } from './../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperacoesComponent } from "./operacoes.component";
import { OperacoessearchComponent } from "./operacoessearch/operacoessearch.component";

const routes: Routes = [
  { path: "operacao", component: OperacoesComponent, canActivate: [AuthGuard] },
  { path: "operacao/:tid", component: OperacoesComponent, canActivate: [AuthGuard] },
  { path: "buscaroperacoes", component: OperacoessearchComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class OperacoesRoutesModule { }
