import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './containers/auth.component';
import { SignInComponent } from './components/sign-in.component';
import { RegisterComponent } from './components/register.component';
import { RecoverPasswordComponent } from './components/recover-password.component';
import {RouterModule} from "@angular/router";
import { AuthService } from './services/auth.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: SignInComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recover', component: RecoverPasswordComponent },
    ])
  ],
  declarations: [AuthComponent, SignInComponent, RegisterComponent, RecoverPasswordComponent],
  exports: [AuthComponent],
  providers: [AuthService]
})
export class AuthModule { }
