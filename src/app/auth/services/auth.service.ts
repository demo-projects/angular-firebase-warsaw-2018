import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthService {
  private fireAuth: AngularFireAuth;

  constructor(fireAuth: AngularFireAuth) {
    this.fireAuth = fireAuth;
  }

  signIn({ email, password }){
    return this.fireAuth.auth
        .signInWithEmailAndPassword(email, password);
  }

  signOut(){
    return this.fireAuth.auth.signOut()
  }

  register(authInfo) {
    return this.fireAuth.auth
        .createUserWithEmailAndPassword(authInfo.email, authInfo.password)
  }

  recoverPassword(email){
    return this.fireAuth.auth.sendPasswordResetEmail(email);
  }

}
