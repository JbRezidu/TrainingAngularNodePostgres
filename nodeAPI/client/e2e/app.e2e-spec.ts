import { TrainingAppPage } from './app.po';

describe('training-app App', () => {
  let page: TrainingAppPage;

  beforeEach(() => {
    page = new TrainingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
