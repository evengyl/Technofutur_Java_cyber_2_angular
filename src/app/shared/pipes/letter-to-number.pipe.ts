import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterPipe'
})
export class LetterPipe implements PipeTransform {

  transform(value: number): string {
    let letterNumber = ['Un', 'Deux', 'Trois', 'Quatre', 'Cinq'];

    return letterNumber[value-1];
  }

}
