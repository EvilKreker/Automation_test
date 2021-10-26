// const GoogleTableLoginPage = require('../pageobjects/GoogleTableLoginPage');
const Page =                require('../pageobjects/GoogleTableLoginPage');
const GoogleTableLoginPage = new Page();
const assert = require('assert');


describe('TestTask', () => {
    it('should login with valid credentials', async () => {

        await GoogleTableLoginPage.open();


        const EmailLine = await $("#identifierId");
        await EmailLine.setValue("moy.service666@gmail.com");

        const NextButtonMail = await $("#identifierNext > div > button > span");
        await NextButtonMail.click();

        const RepeatTryButton = await $("//*[@id=\"next\"]/div/button/span");
        await RepeatTryButton.click();

        await EmailLine.setValue("moy.service666@gmail.com");

        await NextButtonMail.click();

        const Moreinfo = await $("#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div > div:nth-child(1) > a");
        await Moreinfo.click();

        await browser.url('https://support.google.com/accounts/answer/7675428?hl=ru');

        const TitleLine = await $('/html[1]/body[1]/div[2]/div[1]/section[1]/div[1]/div[1]/article[1]/section[1]/h1[1]');

        const value = await TitleLine.getText();
        await assert.deepStrictEqual(value, 'Как войти в аккаунт в поддерживаемом браузере', 'YES');

        // await browser.debug()
    });
});