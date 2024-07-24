export default class Common{
    constructor(){
        this.$header=()=>$(`//img[@src="../images/logo-topbar.svg"]`);
    }

    async launchUrl(){
        await browser.url("https://petstore.octoperf.com/actions/Catalog.action");
        await browser.maximizeWindow();
    }
}