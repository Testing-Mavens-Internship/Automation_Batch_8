import CommonPage from "./mv_CommonPage.js";

class CheckOutPage extends CommonPage {

    constructor()
    {
        super();
        
        this.$firstname = () => $('//input[@name="firstname"]');
        this.$email = () => $('//input[@name="email"]');
        this.$address = () => $('//input[@name="address"]');
        this.$city = () => $('//input[@name="city"]');
        this.$state = () => $('//input[@name="state"]');
        this.$zip = () => $('//input[@name="zip"]');
        this.$nameOnCard = () => $('//input[@name="cardname"]');
        this.$cardNumber = () => $('//input[@name="cardnumber"]');
        this.$expiryMonth = () => $('//input[@name="expmonth"]');
        this.$expiryYear = () => $('//input[@name="expyear"]');
        this.$cvv = () => $('//input[@name="cvv"]');
        this.$clickOnCheckout = () => $('//input[@value="Continue to checkout"]');
        this.$checkOutHeader = () => $('//h1[text()="Check Out karo !"]');

    }


    async clickOnContactUs()
    {

        this.$contactUsIcon().click();
    }

    async clickOnUserIcon()
    {
        this.$userIcon().click(); 
    }


    //https://www.qries.com/
    async enterCheckOutDetails()
    {
        await browser.switchWindow('/cart.html');   
        this.$firstname().setValue('Clinton Madhu'); 
        this.$email().setValue('clinton@example.com'); 
        this.$address().setValue('542 W. 15th Street'); 
        this.$city().setValue('New York'); 
        this.$state().setValue('NY'); 
        this.$zip().setValue('10001'); 
        this.$nameOnCard().setValue('Clinton');
        this.$cardNumber().setValue('1111-2222-3333-4444'); 
        this.$expiryMonth().setValue('September'); 
        this.$expiryYear().setValue('2022');
        this.$cvv().setValue('352'); 

        this.$clickOnCheckout().click();

    }
}

export  default new CheckOutPage();