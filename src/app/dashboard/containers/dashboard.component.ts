import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="col-6">
      <h2>Welcome</h2>
      <button (click)="logOut()">logout</button>  
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  public auth: AuthService;
  private router: Router;

  constructor(auth: AuthService, router: Router) {
    this.auth = auth;
    this.router = router;
  }

  logOut(){
    this.auth.signOut()
  }

  ngOnInit() {
  }

}
