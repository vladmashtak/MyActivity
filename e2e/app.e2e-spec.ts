import { MyActivityPage } from './app.po';

describe('my-activity App', () => {
  let page: MyActivityPage;

  beforeEach(() => {
    page = new MyActivityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
