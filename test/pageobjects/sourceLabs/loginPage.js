import commonClass from "./commonPage.js";

class LoginPage extends commonClass {
    constructor() {
        super();
        this.$header=()=>$(`//div[@class="login_logo"]`)
        this.$usernameField=()=>$(`//input[@id="user-name"]`)
        this.$passwordField=() => $(`//input[@id="password"]`)
        this.$loginButton=()=>$(`//input[@id="login-button"]`)
        this.$usernameValues=()=>$(`//div[@id="login_credentials"]`)
        this.$passwordValue=()=>$(`//div[@class="login_password"]`)
        this.$homePage=()=>$(`//span[@class="title"]`)
        this.$$priceCount=()=>$$(`//div[@class="inventory_item_price"]`)
        this.$priceList=(index)=>$(`(//div[@class="inventory_item_price"])[${index}]`)
        this.$filter=()=>$(`//select[@class="product_sort_container"]`)
        this.$highToLow=()=>(`//option[@value="hilo"]`)
        
    }
    /**
     * Load page successfully
     */
    async loadUrl() {
        await browser.url("https://www.saucedemo.com/");
        await browser.maximizeWindow();
        await this.$header().waitForDisplayed(
            { timeout: 10000, 
               timeoutMsg: "Header is not visible" })
    }

     /**
     * Login page
     */
    async splitCredentials(){

        let usernameText = await this.$usernameValues().getText();
        let passwordText = await this.$passwordValue().getText();

        let usernames = usernameText.split("\n"); 
        let passwords = passwordText.split("\n");

        let username = usernames[1];
        let password = passwords[1];

        await this.$usernameField().setValue(username);
        await this.$passwordField().setValue(password);

        await this.$loginButton().click();

        console.log(username,password);
    }
    /**
     * Click on the sort button and select high to low and validate price is sorted
     */

   
    
}
export default new LoginPage()