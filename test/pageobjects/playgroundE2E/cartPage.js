import CommonPage from "./commonPage.js";

class CartPage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$('//h1[text()="Cart"]')
        this.$$incrementButton=()=>$$('//span[normalize-space()="+"]')
        this.$$price=()=>$$(`//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]/p`)
        this.$totalPrice=(index)=>$(`(//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]/p)[${index}]`)
        this.$shipping=()=>$('//p[text()="Shipping Charge"]//span[@class="font-semibold tracking-wide font-titleFont"]')
        this.$total=()=>$('//span[@class="font-bold tracking-wide text-lg font-titleFont"]')
        this.$logout=()=>$('//li[text()="Log Out"]')
        this.$reset=()=>$('//div//button[normalize-space()="Reset cart"]')
        this.$$quantity=()=>$$('//div[@class="w-1/3 flex items-center gap-6 text-lg"]//p')
        this.$emptyCart=()=>$('//button[text()="Continue Shopping"]')
        this.$user=()=>$(`//*[local-name()='svg'][@viewBox="0 0 320 512"]`);
        this.$logoutMessage=()=>$('//div[@id="4"]')
       
    }

async totalPrice(){
    let totalPrice=0;
    for (let i=1;i<=await this.$$price().length;i++){
        let a = await this.$totalPrice(i).getText();
        let b = a.replace("$","");
        let c = parseFloat(b);
         totalPrice+=c;
        }
        
        let d = await this.$shipping().getText();
        let e=d.replace("$","");
        let f= parseFloat(e);
        let total=totalPrice+f;
        return total;
        
    
}

async clickIncrement() {
    for (let i = 0; i < 3; i++) {
        await this.$$incrementButton()[i].click()
        await browser.pause(3000)
    }
}
async totalPrice(){
    let totalPrice=0;
    for (let i=1;i<=await this.$$price().length;i++){
        let a = await this.$totalPrice(i).getText();
        let b = a.replace("$","");
        let c = parseFloat(b);
         totalPrice+=c;
        }
        
        let d = await this.$shipping().getText();
        let e=d.replace("$","");
        let f= parseFloat(e);
        let total=totalPrice+f;
        console.log(total);
        return total;   
    }
   
    async clickReset() {
        await this.$reset().click()
    }

    async clickLogout(){
        await this.$user().waitForClickable({timeout:5000,timeoutMsg:"dropdown is not still clicked"});
        await this.$user().click();
        await this.$logout().waitForDisplayed({timeout:5000,timeoutMsg:"Logout option is still not displayed"});
        await this.$logout().click();
        await browser.acceptAlert();
    }

}


export default new CartPage();
