import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'new-account',
    component: NewAccountPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
