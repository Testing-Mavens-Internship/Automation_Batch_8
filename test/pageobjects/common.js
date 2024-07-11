export default class Common{
    constructor(){
        this.$header=()=> $(`//div[text()="PlayGround"]`);
        this.$usericon=()=> $(`//div[@class="flex items-center cursor-pointer space-x-2"]/*[local-name()='svg'][2]`);
        this.$selectLogin=()=>$(`//li[text()="Login"]`);
        this.$userName=()=> $(`//input[@id="email"]`);
        this.$password=()=> $(`//input[@id="password"]`);
        this.$submitButton=()=>$(`//button[@type="submit"]`);
    }
    
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/");
        //await browser.pause(3000);// can use waitforDisplayed();
    }
}