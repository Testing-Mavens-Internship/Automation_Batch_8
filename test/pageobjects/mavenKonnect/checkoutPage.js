class CheckoutPage{
    constructor(){
        this.$checkoutHeader=()=>$('//h1[text()="Check Out karo !"]');
        this.$fname=()=>$('//input[@id="fname"]');
        this.$email=()=>$('//input[@id="email"]');
        this.$address=()=>$('//input[@id="adr"]');
        this.$city=()=>$('//input[@id="city"]');
        this.$state=()=>$('//input[@id="state"]');
        this.$zip=()=>$('//input[@id="zip"]');
        this.$nameOnCard=()=>$('//input[@id="cname"]');
        this.$creditCardNumber=()=>$('//input[@id="ccnum"]');
        this.$expmonth=()=>$('//input[@id="expmonth"]');
        this.$expYear=()=>$('//input[@id="expyear"]');
        this.$cvv=()=>$('//input[@id="cvv"]')
        this.$checkOutButton=()=>$('//input[@value="Continue to checkout"]')
    }
    async fillCheckOutDetails(name,email,address,city,state,zip,nameOnCard,creditCardNumber,expmonth,expYear,cvv){
        await browser.switchWindow('https://demotmwebsite.github.io/cart.html')
        await this.$fname().setValue(name);
        await this.$email().setValue(email);
        await this.$address().setValue(address);
        await this.$city().setValue(city);
        await this.$state().setValue(state);
        await this.$zip().setValue(zip);
        await this.$nameOnCard().setValue(nameOnCard);
        await this.$creditCardNumber().setValue(creditCardNumber);
        await this.$expmonth().setValue(expmonth);
        await this.$expYear().setValue(expYear);
        await this.$cvv().setValue(cvv);
        await this.$checkOutButton().click();
    }
}

export default new CheckoutPage();