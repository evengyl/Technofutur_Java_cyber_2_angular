import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FakeAuthRefreshPromiseService {

	constructor() { }


	getDatasFakeV1() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//resolve({ name : "Loic"})
				reject({ error : "Y a eu un stud"})
			}, 1000);
		})
	}


	getDatasFakeV2() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name : "Loic"})
			}, 1000);
		})
	}

	getDatasFakeV3() {
		let myPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name : "Loic"})
			}, 1000);
		})

		//plus tard,
		return myPromise
	}


	getDatasFakeV4(){
		//Resolve All Or Reject All

		let promiseV4_1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name : "Loic"})
				//reject({ error : "Y a eu un stud"})
			}, 1000);
		})

		let promiseV4_2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name : "Cédric"})
				//reject({ error : "Y a eu un stud"})
			}, 2000);
		})

		let promiseV4_3 = new Promise((resolve, reject) => {
			setTimeout(() => {
				//resolve({ name : "Pierre"})
				reject({ error : "Y a eu un stud"})
			}, 3000);
		})

		return Promise.all([promiseV4_1, promiseV4_2, promiseV4_3])
	}



	getDatasFakeV5(){
		//Resolve One  Or Reject One

		let promiseV5_1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				//resolve({ name : "Loic"})
				reject({ error : "Y a eu un stud"})
			}, 1000);
		})

		let promiseV5_2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name : "Cédric"})
				//reject({ error : "Y a eu un stud"})
			}, 2000);
		})

		let promiseV5_3 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name : "Pierre"})
				//reject({ error : "Y a eu un stud"})
			}, 3000);
		})

		return Promise.race([promiseV5_1, promiseV5_2, promiseV5_3])
	}


	getDatasFakeV6(){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name : "Jérémy"})
			}, 1000)
		})
	}

	async getDatasFakeV7(){
		let infos : any = await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name : "Gauthier"})
			}, 1000)
		})

		console.log("Je suis dans le service async ! apres la promise !")
		console.log(infos)
		infos.age = 42
		return infos
	}
}
