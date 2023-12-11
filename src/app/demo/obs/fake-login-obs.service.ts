import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoginObsService {
  
  baseUrl : string = "https://restcountries.com/v3.1/"

  statusAuth : boolean = false
  statusAuth$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.statusAuth)

  constructor(private readonly httpC : HttpClient){
  }


  getAllNameCountries(){
    return this.httpC.get<any[]>(this.baseUrl + "all?fields=name")
  }

  login(){
    this.statusAuth = true
    this.statusAuth$.next(this.statusAuth)
  }

  logout(){
    this.statusAuth = false
    this.statusAuth$.next(this.statusAuth)
  }
}
