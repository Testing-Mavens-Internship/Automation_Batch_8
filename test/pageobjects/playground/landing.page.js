import commonPage from "./common.page";

 class LandingPage extends CommonPage {
    constructor(){
        super();
        this.$user=()=>$(`//*[local-name()='svg'][@viewBox="0 0 320 512"]`);
        this.$login=()=>$('//li[text()="Login"]')
        this.$header=()=>$('//div[text()="PlayGround"]');
        
    }
   async UserIcon(){
        await this.$user().click();

    }
   async ClickLogin(){
    await this.$login().click();

    } 
       
    }
    export default LandingPage();
