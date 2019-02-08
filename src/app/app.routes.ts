import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SettingsComponent } from "./users/settings/settings.component";
import { UserSearchComponent } from "./users/usersearch/usersearch.component";
import { ClientsComponent } from "./clients/clients.component";
import { AuthGuard } from './security/auth.guard';
import { ErrorComponent } from './core/error.component';
import { AcessComponent } from './core/acess.component';
import { DashBoardComponent } from './core/dashboard/dashboard.component';

export const routes: Routes = [
  { path: "forbidden", component: AcessComponent },
  { path: "error", component: ErrorComponent },
  {path:'dashboard', component:DashBoardComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
