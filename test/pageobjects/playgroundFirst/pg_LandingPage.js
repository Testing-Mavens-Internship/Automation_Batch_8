import CommonPage from "./pg_common.js";

 class LandingPage extends CommonPage {

        

    constructor()
    {
        super();
        this.$logolocator = () =>$('//div[@class="flex items-center justify-between h-full"]//child::div[text()="PlayGround"]');
        this.$userIcon = () =>$(`//*[local-name()="svg" and @stroke="currentColor"]/*[local-name()="path" and @d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z']`);
        this.$loginButton =() =>$(`//li[text()="Login"]`)
    
    }

    async logoValidation(){

        
        

    }

    async clickOnUserIcon(){

    }

    async loginButton(){
    }

}

export default new LandingPage();
//obj name =landingobj