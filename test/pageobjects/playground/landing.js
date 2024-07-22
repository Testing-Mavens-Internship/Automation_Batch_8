import Common from '../playground/common.js';

class Landing extends Common
{
    constructor()
    {
        super();
        this.$username=()=>$('//input[@placeholder="Username"]')
        this.$password=()=>$('//input[@placeholder="Password"]')
        this.$submitbutton=()=>$('//button[@type="submit"]')
        this.$homepageheader=()=>$('//p[text()="Shop by Category"]')
    }
    /**
     * to login to the playground
     */
    async login()
    {
        await this.$username().setValue("playground")
        await this.$password().setValue("playground@TM")
        await this.$submitbutton().waitForClickable({timeout:5000,timeoutMsg:"Not Clickable"})
        await this.$submitbutton().click()
        await this.$homepageheader().waitForDisplayed({timeout:10000,timeoutMsg:"Not found"})
    }
}
export default new Landing()