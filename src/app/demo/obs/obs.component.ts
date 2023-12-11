import { Component } from '@angular/core';
import { FakeLoginObsService } from './fake-login-obs.service';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
})
export class ObsComponent{

  statusAuth : boolean = false
  listCountries : any[] = []

  constructor(private readonly obsServe : FakeLoginObsService){
    this.statusAuth = this.obsServe.statusAuth
  }

  getAllNameCountries(){
    this.obsServe.getAllNameCountries().subscribe((datas : any[]) => {
      this.listCountries = datas
    })
  }


  login(){
    this.obsServe.login()
    this.getAllNameCountries()
    this.statusAuth = this.obsServe.statusAuth
  }

  logout(){
    this.obsServe.logout()
    this.statusAuth = this.obsServe.statusAuth
  }
}
