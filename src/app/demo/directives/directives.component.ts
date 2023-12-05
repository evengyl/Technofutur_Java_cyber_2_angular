import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

array: string[] = ['Hello', 'Fullstack', 'Pomme', 'Abricot'];
friendly: boolean = false;

clickMe() {
  this.friendly = !this.friendly;
}
}
