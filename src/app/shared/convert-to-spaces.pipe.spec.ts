import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

describe('ConvertToSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToSpacesPipe();
    expect(pipe).toBeTruthy();
  });

  it('convert a dash to a space', () => {
    const pipe = new ConvertToSpacesPipe();

    const convertedString = pipe.transform('867-5309', '-');

    expect(convertedString).toEqual('867 5309');
  });

  it('convert a percent sign to a space', () => {
    const pipe = new ConvertToSpacesPipe();

    const convertedString = pipe.transform('20%10', '%');

    expect(convertedString).toEqual('20 10');
  });
});
