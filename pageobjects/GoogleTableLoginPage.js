//const Page = require('./page');

class GoogleTableLoginPage  {

        async open(){
            await console.log('open');
            await  browser.maximizeWindow();
            await  browser.url("https://docs.google.com/spreadsheets/d/1wV_b5TnfUw-9s-KzqhTHluDfVMkb2lQTLNUfty0ufnw/edit#gid=0");
        };


}


module.exports =  GoogleTableLoginPage;