import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  public currentUser: firebase.User = null;
  public isLogin = false;

  constructor(public afAuth: AngularFireAuth,
              private _router: Router) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
      this.isLogin = !!user;
    });
  }

  public signInWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(_ => this._router.navigate(['main']))
      .catch((error) => console.error(error));
  }

  public signInWithGoogleAuth(): void {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(_ => this._router.navigate(['main']))
      .catch((error) => console.error(error));
  }

  public logout(): void {
    this.isLogin = false;
    this.afAuth.auth.signOut();
    this._router.navigate(['sign-in'])
  }

  public createUser(formData: FormGroup): void {
    if (formData.valid) {
      const {name, surname, email, password} = formData.value;
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user: firebase.User) => {
          user.updateProfile({displayName: `${name} ${surname}`, photoURL: ''});
          formData.reset();
        })
        .catch((error) => console.error(error));
    }
  }
}
