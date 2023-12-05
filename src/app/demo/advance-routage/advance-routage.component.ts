import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-advance-routage',
	templateUrl: './advance-routage.component.html'
})
export class AdvanceRoutageComponent {

	constructor(private readonly router: Router) {
		console.log(router)
	}

	navigate() {
		this.router.navigate(["subroutage"]).then((datasInfos) => {
			console.log(datasInfos) // == true, ok j'ai naviguer....
		})
	}

	navigateParams(idProduct: number) {
		this.router.navigate(["subroutage", idProduct]).then((datasInfos) => {
			console.log(datasInfos) // == true, ok j'ai naviguer....
		})
	}

	navigateQuery() {
		let myFilterChoice: string = "desc"

		this.router.navigate(["subroutage", 42], {
			queryParams: {
				"orderBy": myFilterChoice
			}
		}).then((datasInfos) => {
			console.log(datasInfos) // == true, ok j'ai naviguer....
		})
	}
}
