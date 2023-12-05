import { Component } from '@angular/core';
import { FakeLoginGuardService } from './fake-login-guard.service';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
})
export class GuardsComponent {

  statusAuth : boolean = false

  constructor(private readonly loginService : FakeLoginGuardService){
    this.statusAuth = this.loginService.statusAuth
  }

  login()
  {
    this.loginService.logIn()
    this.statusAuth = this.loginService.statusAuth
  }

  logout()
  {
    this.loginService.logOut()
    this.statusAuth = this.loginService.statusAuth
  }

}
