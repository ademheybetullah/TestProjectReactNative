const { Given } = require("@cucumber/cucumber");

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('detaybtn'))).toExist();
    await element(by.id('detaybtn')).tap();
    await expect(element(by.id('detaySayfasi'))).toExist();
    await element(by.id('emailTxt')).replaceText('email');
    await element(by.id('sifreTxt')).replaceText('sifre');
    await element(by.id('emailTxt')).tapReturnKey();
  });
  
});
