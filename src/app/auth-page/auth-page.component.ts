import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})

export class AuthPageComponent {
  public signInForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.signInForm = this._createForm(_fb);
  }

  private _createForm(fb: FormBuilder): FormGroup {
    return fb.group({
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
