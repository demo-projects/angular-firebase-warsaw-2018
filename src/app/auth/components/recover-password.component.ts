import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  template: `
    <div class="col-6">
      <h2>Recover your password</h2>
      <form>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control">
        </div>
        
        <button type="submit" class="btn btn-outline-primary">recover</button>
      </form>

      <div style="margin-top: 25px" class="text-center">
        <a routerLink="">Sign In</a> | <a routerLink="../register">create new account</a>
      </div>

    </div>
  `,
  styles: []
})
export class RecoverPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
