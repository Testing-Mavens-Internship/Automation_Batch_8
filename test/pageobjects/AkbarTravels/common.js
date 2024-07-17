export default class common{
    constructor(){
        this.$header=()=>$(`//*[name()="svg" and @class="ng-tns-c7-2"]`)

    }
    async loadUrl(){
        await browser.url("https://www.akbartravels.com/in/flight?lan=en")
        await browser.maximizeWindow();
    }
}