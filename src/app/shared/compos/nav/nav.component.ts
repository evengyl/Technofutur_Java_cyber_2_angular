import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeLoginObsService } from 'src/app/demo/obs/fake-login-obs.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  statusAuth : boolean = false
  statusAuthSub! : Subscription

  constructor(private readonly obsServe : FakeLoginObsService){

    //V1 SIMPLE
    // this.obsServe.statusAuth$.subscribe((newStatus : boolean) => {
    //   this.statusAuth = newStatus
    // })

    //V2 COMPLETE
    this.obsServe.statusAuth$.subscribe({
      next : (newStatus : boolean) => {
        this.statusAuth = newStatus
      },
      error : (error : any) => {
        console.log(error)
      },
      complete : () => {
        console.log("L'observable à été détruit par le programme")
      }
    })

    //V3 SIMPLE avec variable de subscriber
    this.statusAuthSub = this.obsServe.statusAuth$.subscribe((newStatus : boolean) => {
      this.statusAuth = newStatus
    })
    this.statusAuthSub.unsubscribe()
  }

}
