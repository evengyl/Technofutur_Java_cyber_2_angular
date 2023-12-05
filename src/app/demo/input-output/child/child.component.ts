import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() banCharacter : EventEmitter<number> = new EventEmitter<number>();

  @Input() id: number = 0;
  @Input() ranked: number = 0;
  @Input() win: number = 0;
  @Input() defeat: number = 0;
  @Input() name: string = '';

  ban(idCharacterInChild: number) {
    this.banCharacter.emit(idCharacterInChild)
  }

}
