export default class Common{
    constructor(){
        this.$header=()=>$(`//img[@src="../images/logo-topbar.svg"]`);
    }
    /**
     * Launch the url in the browser
     */

    async launchUrl(){
        await browser.url("https://petstore.octoperf.com/actions/Catalog.action");
        await browser.maximizeWindow();
    }
    /**
     * Generate random email
     * @returns string
     */
    async generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 15);
        return `${randomString}@example.com`;
    }
}