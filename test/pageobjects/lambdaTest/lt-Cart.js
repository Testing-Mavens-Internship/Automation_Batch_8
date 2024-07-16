import commonlambda from "./lt-Common.js";

class cartlambda extends commonlambda
{
    constructor()
    {
        super()
        this.$carticon=()=>$('//button[@class="btn btn-cart cart-42"]')
        this.$cartselector=()=>$('//select[@id="input-option231-212958"]')
        this.$cartselectoroption=()=>$('//option[normalize-space()="Medium (-$28.80)"]')
        this.$addtocart=()=>$('//div[@id="entry_212964"]/button[@title="Add to Cart"]')
        this.$cartpopup=()=>$('//div[@class="d-flex mb-3 align-items-start"]/p[text()="Success: You have added "]')
        this.$cart=()=>$(`(//div[@class="cart-icon"])[1]`)
        this.$chkout=()=>$('//a[@class="icon-right both btn btn-secondary btn-lg btn-block"]')
        this.$newcrt=()=>$('//div[@class="entry-section container " and @id="entry_212942"]')
        this.$closecartpopup=()=>$('//button[@class="ml-2 mb-1 close"]')
    }
    async carticonclk() {
        console.log("Waiting for cart icon to be clickable...");
        await this.$carticon().waitForClickable({ timeout: 4000 });
        console.log("Clicking cart icon...");
        await this.$carticon().click();

        console.log("Clicking cart selector...");
        await this.$cartselector().click();

        console.log("Waiting for cart selector option to be clickable...");
        // await this.$cartselectoroption().waitForClickable({ timeout: 4000 });

        console.log("Clicking cart selector option...");
        await this.$cartselectoroption().click();

        console.log("Scrolling to add to cart button...");
        await this.$addtocart().scrollIntoView();

        console.log("Waiting for add to cart button to be clickable...");
        await this.$addtocart().waitForClickable({ timeout: 4000 });

        console.log("Clicking add to cart button...");
        await this.$addtocart().click();

        
    }
    async gotocart()
    {   

        // await this.$cartpopup().waitForDisplayed({timeout: 10000, reverse:true});
        await this.$closecartpopup().click()
        // await browser.pause(10000);
        await this.$cart().scrollIntoView();
        await this.$cart().click()
        // await this.$chkout().waitForClickable({timeout:3000})
        await this.$chkout().click()
    }
}
export default new cartlambda()