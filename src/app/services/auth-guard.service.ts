import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _afAuth: AngularFireAuth,
              private _router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._afAuth.authState.map((user: firebase.User) => {
      if (!user) {
        this._router.navigate(['sign-in']);
      }
      return true;
    });
  }
}
