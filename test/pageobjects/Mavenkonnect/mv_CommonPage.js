
export default class CommonPage{

      
    constructor()
    {
    
    this.$mavenkonnectLogo = () =>$('//span[normalize-space(text())="MavenKonnect"]');
    
    }

    async LaunchUrl(){

        
        await browser.url('https://demotmwebsite.github.io');
        browser.maximizeWindow();

    }

}