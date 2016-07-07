import { Ang2searchAppPage } from './app.po';

describe('ang2search-app App', function() {
  let page: Ang2searchAppPage;

  beforeEach(() => {
    page = new Ang2searchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
