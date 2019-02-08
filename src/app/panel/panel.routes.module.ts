import { AuthGuard } from './../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  { path: "painel", component: PanelComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PanelRoutesModule { }
