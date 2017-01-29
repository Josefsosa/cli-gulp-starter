import { EServicesPage } from './app.po';

describe('e-services App', function() {
  let page: EServicesPage;

  beforeEach(() => {
    page = new EServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
