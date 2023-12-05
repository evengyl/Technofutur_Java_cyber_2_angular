import { LetterPipe } from './letter-to-number.pipe';

describe('LetterToNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new LetterPipe();
    expect(pipe).toBeTruthy();
  });
});
