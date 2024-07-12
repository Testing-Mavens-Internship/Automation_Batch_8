
export default class CommonPagePrecision{

      
    constructor()
    {
    
    this.$logolocator = () =>$('//div[@class="header__heading-logo-wrapper"]/img[@class="header__heading-logo motion-reduce"]');

    
    }

    async LaunchUrl(){

        await browser.url('https://precisiontech.uk');
        browser.maximizeWindow();

    }

}