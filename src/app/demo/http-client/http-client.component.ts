import { Component } from '@angular/core';
import { JsonPlaceholderService } from './json-placeholder.service';
import { firstValueFrom } from 'rxjs';

@Component({
	selector: 'app-http-client',
	templateUrl: './http-client.component.html'
})
export class HttpClientComponent {

	listPosts : any[] = []
	newTitlePost : string = "Bonjour les pignoufs"
	newBodyPost : string = "le caca des pigeons c'est caca, faut pas manger."

	constructor(private readonly jsonServe : JsonPlaceholderService){
		this.getAll()
	}


	async getAll(){
		//ASYNCHRONE !!!

		//si une web api n'est pas real time, donc dans 99.99% des cas, on peux tout à fait 
		//la transformer en simple promise
		let test = await firstValueFrom(this.jsonServe.getAll())
		//console.log(test)


		this.jsonServe.getAll().subscribe((datas : any) => {
			this.listPosts = datas
		})
	}


	sendPost(){
		if(this.newTitlePost.length >= 6 && this.newBodyPost.length >= 10){
			
			this.jsonServe.sendPost({title: this.newTitlePost, body: this.newBodyPost}).subscribe((response : any) => {
				console.log(response)
				this.listPosts.unshift(response)
			})

		}
	}

}
