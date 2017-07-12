import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public afAuth: AngularFireAuth) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('ActivatedRouteSnapshot: ', route);
    console.log('RouterStateSnapshot: ', state);
    return this.afAuth.authState.map((user: firebase.User) => {
      const authState: boolean = !!user;

      if (authState) {

      }

      return authState;
    });
  }
}
