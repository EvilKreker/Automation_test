// const GoogleTableLoginPage = require('../pageobjects/GoogleTableLoginPage');
const Page =                require('../pageobjects/GoogleTableLoginPage');
const GoogleTableLoginPage = new Page();
const assert = require('assert');


describe('TestTask', () => {
    it('should login with valid credentials', async () => {

        await GoogleTableLoginPage.open();


        const EmailInput = await $("#identifierId");
        await EmailInput.setValue("moy.service666@gmail.com");

        const MailNextButton = await $("#identifierNext > div > button > span");
        await MailNextButton.click();

        const RepeatTryButton = await $("//*[@id=\"next\"]/div/button/span");
        await RepeatTryButton.click();

        await EmailInput.setValue("moy.service666@gmail.com");

        await MailNextButton.click();

        // const Moreinfo = await $("#view_c
        // ontainer > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div > div:nth-child(1) > a");
        // const Moreinfo = await $("//*[@jsname='ngKiOe']");
        // const Moreinfo = await $(".PrDSKc a");
        // await Moreinfo.click();
        // await browser.pause(5000)
        // let moreInfoUrl = await browser.getUrl()
        // await console.log(moreInfoUrl)
        // await browser.pause(5000)
        // await assert.deepStrictEqual(await moreInfoUrl, 'https://support.google.com/accounts/answer/7675428?hl=ru')

        await browser.url('https://support.google.com/accounts/answer/7675428?hl=ru');

        // await browser.debug();

        const TitleLine = await $('/html[1]/body[1]/div[2]/div[1]/section[1]/div[1]/div[1]/article[1]/section[1]/h1[1]');
        // const TitleLine = await $('.article .article-container h1');
        // let TitleLine = await $('/descendant::h1');
        // let TitleLine = await $("//*[@class='article-container']/h1");

        const value = await TitleLine.getText();
        await assert.deepStrictEqual(value, 'Как войти в аккаунт в поддерживаемом браузере');

        // await browser.debug()
    });
});