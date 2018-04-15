import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AngularFireAuth} from "angularfire2/auth";
import {map, take, tap} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
  private afAuth: AngularFireAuth;
  private router: Router;

  constructor(afAuth: AngularFireAuth, router: Router) {
    this.afAuth = afAuth;
    this.router = router;
  }

  canActivate() {
    return this.afAuth.authState.pipe(
        take(1),
        map(user => !!user),
        tap(loggedIn => {
          if (!loggedIn) {
            this.router.navigate(['']);
          }
          return true;
        })
    )
  }
}
