import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
  constructor(public authentication: AuthenticationService) { }
}
