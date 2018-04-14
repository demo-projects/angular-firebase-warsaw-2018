import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `      
      <div class="col-6">
        <h2>Sign in</h2>
        <form>
          <div class="form-group">
            <label>Email address</label>
            <input type="text" class="form-control">
          </div>
          
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control">
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
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
