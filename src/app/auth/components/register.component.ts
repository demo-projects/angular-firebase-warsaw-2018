import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <div class="col-6">
      <h2>Register</h2>
      <form>
        <div class="form-group">
          <label>Full name</label>
          <input type="text" class="form-control">
        </div>

        <div class="form-group">
          <label>Email address</label>
          <input type="text" class="form-control">
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control">
        </div>

        <div class="form-group">
          <label>Phone Number</label>
          <input type="number" class="form-control">
        </div>

        <button type="submit" class="btn btn-outline-primary">register</button>
        
      </form>

      <div style="margin-top: 25px" class="text-center">
        <a routerLink="">Sign In</a> | <a routerLink="../recover">recover your password</a>
      </div>

    </div>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
