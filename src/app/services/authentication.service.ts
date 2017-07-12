import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AuthenticationService {
  public currentUser: firebase.User = null;
  public isLogin = false;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
      this.isLogin = !!user;
    });
  }

  public signInWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public signInWithGoogleAuth(): void {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public logout(): void {
    this.isLogin = false;
    this.afAuth.auth.signOut();
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
