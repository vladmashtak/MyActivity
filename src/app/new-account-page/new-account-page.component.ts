import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.scss']
})
export class NewAccountPageComponent {
  public userForm: FormGroup;

  constructor(public authentication: AuthenticationService,
              private _fb: FormBuilder) {
    this.userForm = this._createForm(_fb);
  }

  public createNewAccount(): void {
    this.authentication.createUser(this.userForm);
  }

  private _createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      name: ['', Validators.compose([Validators.required, Validators.min(3)])],
      surname: ['', Validators.compose([Validators.required, Validators.min(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.min(3)])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.min(3)])]
    }, {
      validator: this._checkMatchingPasswords('password', 'repeatPassword')
    });
  }

  private _checkMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      const passwordError = (passwordInput.value !== passwordConfirmationInput.value) ? {notEquivalent: true} : null;

      return passwordConfirmationInput.setErrors(passwordError);
    }
  }
}
