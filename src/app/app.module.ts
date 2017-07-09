import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { MainPageComponent } from './main-page/main-page.component';

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
    AuthPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(configFirebae)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
