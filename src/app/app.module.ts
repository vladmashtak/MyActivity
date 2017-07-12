import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';

// Initialize Firebase
const configFirebae = {
  apiKey: 'AIzaSyAc3wMvPfidhNNPE6E0XLCpTdgZjjsda3c',
  authDomain: 'myactivity-1499521175645.firebaseapp.com',
  databaseURL: 'https://myactivity-1499521175645.firebaseio.com',
  projectId: 'myactivity-1499521175645',
  storageBucket: 'myactivity-1499521175645.appspot.com',
  messagingSenderId: '886357186829'
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInPageComponent,
    MainPageComponent,
    NewAccountPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(configFirebae)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
