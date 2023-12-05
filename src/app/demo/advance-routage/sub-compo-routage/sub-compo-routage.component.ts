import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-sub-compo-routage',
	templateUrl: './sub-compo-routage.component.html'
})
export class SubCompoRoutageComponent {

	idProduct! : number
	orderBy! : string

	constructor(private readonly activatedRoute: ActivatedRoute)
	{
		if(this.activatedRoute.snapshot.params["idProduct"])
			this.idProduct = this.activatedRoute.snapshot.params["idProduct"]

		if(this.activatedRoute.snapshot.queryParams["orderBy"])
			this.orderBy = this.activatedRoute.snapshot.queryParams["orderBy"]
	}
}
