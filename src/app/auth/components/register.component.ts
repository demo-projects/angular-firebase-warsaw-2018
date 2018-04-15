import {Component} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  template: `
    <div class="col-6">
      <h2>Register</h2>
      <form (ngSubmit)="register()">
        <div class="form-group">
          <label>Full name</label>
          <input name="name"
                 [(ngModel)]="registerInfo.name"
                 class="form-control"
                 autofocus>
        </div>

        <div class="form-group">
          <label>Email address</label>
          <input name="email" [(ngModel)]="registerInfo.email"
                 class="form-control">
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" name="password"
                 [(ngModel)]="registerInfo.password" class="form-control">
        </div>

        <div class="form-group">
          <label>Phone Number</label>
          <input type="number"
                 name="phone"
                 [(ngModel)]="registerInfo.phone"
                 class="form-control">
        </div>
        
        <div class="lead">
          <small class="text-danger">{{ errorMsg }}</small>
        </div>
        
        <button type="submit" class="btn btn-outline-primary">register</button>

      </form>

      <div style="margin-top: 25px" class="text-center">
        <a routerLink="">Sign In</a> | <a routerLink="../recover">recover your
        password</a>
      </div>

    </div>
  `,
  styles: []
})
export class RegisterComponent {

  registerInfo = {name: '', email: '', password: '', phone: ''};
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {
  }

  register() {
    this.auth.register(this.registerInfo)
        .then( () => this.router.navigate(['dashboard']) )
        .catch( ({ message }) => this.errorMsg = message )
  }

}
