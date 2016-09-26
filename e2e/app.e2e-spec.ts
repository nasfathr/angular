import { AmgularPage } from './app.po';

describe('amgular App', function() {
  let page: AmgularPage;

  beforeEach(() => {
    page = new AmgularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
