import { TestImpurePipesPage } from './app.po';

describe('test-impure-pipes App', () => {
  let page: TestImpurePipesPage;

  beforeEach(() => {
    page = new TestImpurePipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
