import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SecurityRoutesModule } from "./security.routes.module";
import { Http, RequestOptions } from "@angular/http";
import { FormsModule } from "@angular/forms";
import {SelectItem, MessageService} from 'primeng/components/common/api';
import {Message} from 'primeng//api';
import {ToastModule} from 'primeng/toast';
import { environment } from "./../../environments/environment";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { LoginComponent } from "./login/login.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { SecurityService } from "./security.service";
import { AuthGuard } from './auth.guard';
import { ChangepassComponent } from "./changepass/changepass.component";
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  imports: [CommonModule, SecurityRoutesModule, FormsModule, ToastModule, ProgressSpinnerModule, ButtonModule],
  declarations: [LoginComponent, ForgotComponent , ChangepassComponent],
  exports: [LoginComponent, ForgotComponent, ChangepassComponent],
  providers: [SecurityService,  AuthGuard, MessageService]
})
export class SecurityModule {}
