import { Component } from '@angular/core';
import { FakeAuthRefreshPromiseService } from './fake-auth-refresh-promise.service';

@Component({
  selector: 'app-refresh-promise',
  templateUrl: './refresh-promise.component.html'
})
export class RefreshPromiseComponent {

  datasV1 : any = {}
  errorsV1 : any = {}

  datasV4 : any = {}
  errorsV4 : any = {}

  datasV5 : any = {}
  errorsV5 : any = {}


  datasV6 : any = {}
  errorsV6 : any = {}

  datasV7 : any = {}
  errorsV7 : any = {}


  constructor(private readonly refreshServe : FakeAuthRefreshPromiseService){

    //then = resolve de la promesse..
    //catch = reject de la promesse..
    this.refreshServe.getDatasFakeV1()
    .then((datas) => {
      this.datasV1 = datas
    })
    .catch((err) => {
      this.errorsV1 = err
    })




    let myPromise = this.refreshServe.getDatasFakeV2()
    //.. et plus tard au besoin
    myPromise.then((datas) => {
      this.datasV1 = datas
    })
    .catch((err) => {
      this.errorsV1 = err
    })




    this.refreshServe.getDatasFakeV3()
    //.. et plus tard au besoin
    myPromise.then((datas) => {
      this.datasV1 = datas
    })
    .catch((err) => {
      this.errorsV1 = err
    })






    this.refreshServe.getDatasFakeV4()
    .then((datas) => {
      this.datasV4 = datas
    })
    .catch((err) => {
      this.errorsV4 = err
    })



    this.refreshServe.getDatasFakeV5()
    .then((datas) => {
      this.datasV5 = datas
    })
    .catch((err) => {
      this.errorsV5 = err
    })


    console.log("AVANT le call de getV6 et getV7")
    this.getDatasFakeV6()
    //on aura quand même du vide !!! parce uqe le const n'est pas async !!!! et ne peux pas l'être !
    console.log(this.datasV6)
    this.getDatasFakeV7()
    console.log("APRES le call de getV6 et getV7")


  }


  async getDatasFakeV6(){
    console.log("Dans V6")
    //await !!! sucre syntaxique pour le THEN
    this.datasV6 = await this.refreshServe.getDatasFakeV6()
    console.log(this.datasV6)
    console.log("J'ai les infos du V6")
  }


  
  async getDatasFakeV7(){
    console.log("Dans V7")
    this.datasV7 = await this.refreshServe.getDatasFakeV7()
    console.log(this.datasV7)
    console.log("J'ai les infos du V7")
  }


}
