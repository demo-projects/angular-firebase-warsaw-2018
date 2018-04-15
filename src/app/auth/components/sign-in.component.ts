import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-sign-in',
  template: `      
      <div class="col-6">
        <h2>Sign in</h2>
        <form (ngSubmit)="signIn()">
          <div class="form-group">
            <label>Email address</label>
            <input type="text" name="username" [(ngModel)]="authInfo.email" class="form-control">
          </div>
          
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" [(ngModel)]="authInfo.password" class="form-control">
          </div>
            
          <button type="submit" class="btn btn-outline-primary">submit</button>
          
        </form>
        
        <div style="margin-top: 25px" class="text-center">
          <a routerLink="register">register</a> | <a routerLink="recover">recover your password</a>  
        </div>
        
      </div>
  `,
  styles: []
})
export class SignInComponent {

  authInfo = {email: '', password: ''};

  constructor(private auth: AuthService) {}

  signIn() {
    this.auth.signIn(this.authInfo)
  }

}
