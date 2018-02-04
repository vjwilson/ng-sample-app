import { AppPage } from './app.po';

describe('NG Sample App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display site name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Cardinal Trails App');
  });
});
