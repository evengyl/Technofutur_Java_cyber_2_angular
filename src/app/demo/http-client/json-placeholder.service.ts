import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  baseUrl : string = "https://jsonplaceholder.typicode.com/"

  constructor(private readonly httpC : HttpClient) { }


  getAll() : Observable<any>
  {
    return this.httpC.get<any>(this.baseUrl + "posts")
  }


  sendPost(newPost : any) : Observable<any>{
    let {title, body} = newPost

    return this.httpC.post(this.baseUrl + "posts", {
      title, body,
      userId : 1
    })
	}
}
