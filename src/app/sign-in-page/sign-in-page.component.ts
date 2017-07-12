import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})

export class SignInPageComponent {
  public signInForm: FormGroup;

  constructor(public authentication: AuthenticationService,
              private _fb: FormBuilder) {
    this.signInForm = this._createForm(_fb);
  }

  public formSignIn(): void {
    if (this.signInForm.valid) {
      const {email, password} = this.signInForm.value;
      this.authentication.signInWithEmailAndPassword(email, password)
        .then(_ => this.signInForm.reset())
        .catch((error) => console.error(error));
    }
  }

  public googleSignIn(): void {
    this.authentication.signInWithGoogleAuth()
  }

  private _createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.min(3)])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.min(3)])]
    });
  }
}
