import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  listTopCharacters : any[] = [
    { id: 1, name : "Sangoku", ranked : 1, win : 100, defeat : 0},
    { id: 2, name : "Shadowheart", ranked : 2, win : 99, defeat : 1},
    { id: 3, name : "Edwin VanCleef", ranked : 3, win : 85, defeat : 15},
    { id: 4, name : "Lothair", ranked : 4, win : 84, defeat : 16},
    { id: 5, name : "Thrall", ranked : 5, win : 70, defeat : 30},
    { id: 6, name : "Bambi", ranked : 6, win : 69, defeat : 31},
    { id: 7, name : "Panpan", ranked : 7, win : 42, defeat : 58},
    { id: 8, name : "Pinki", ranked : 8, win : 40, defeat : 60},
    { id: 9, name : "Trunks", ranked : 9, win : 12, defeat : 88},
  ]


  banCharacters(idCharacterInParent : number){

    this.listTopCharacters = this.listTopCharacters.filter((character) => {

      if(character.id == idCharacterInParent) return false

      return true

    })
  }
}
