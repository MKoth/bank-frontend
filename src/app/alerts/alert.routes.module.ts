import { RsaConfigComponent } from './rsa-config/rsa-config.component';
import { AuthGuard } from './../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsearchComponent } from './alertsearch/alertsearch.component';


const routes: Routes = [
    { path: 'buscaralerta', component: AlertsearchComponent, canActivate: [AuthGuard]},
    { path: 'rsaconfig', component: RsaConfigComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AlertRoutesModule { }
