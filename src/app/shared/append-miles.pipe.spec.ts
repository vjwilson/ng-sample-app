import { AppendMilesPipe } from './append-miles.pipe';

describe('AppendMilesPipe', () => {
  it('create an instance', () => {
    const pipe = new AppendMilesPipe();
    expect(pipe).toBeTruthy();
  });

  it('appedn the word miles to the given input', () => {
    const pipe = new AppendMilesPipe();

    const appendedString = pipe.transform('8.3');

    expect(appendedString).toEqual('8.3 miles');
  });
});
