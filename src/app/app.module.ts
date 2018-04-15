import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {Router, RouterModule} from "@angular/router";
import {AuthComponent} from "./auth/containers/auth.component";
import {AuthModule} from "./auth/auth.module";
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {DashboardComponent} from "./dashboard/containers/dashboard.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AuthGuard} from "./auth/services/auth.guard";
import {map, take, tap} from "rxjs/operators";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: AuthComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
