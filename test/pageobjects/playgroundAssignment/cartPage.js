import Common from '../playgroundAssignment/common.js';

export class CartPage extends Common {
    constructor(){
       super(); 
        this.$cartHeader=()=>$('//h1[text()="Cart"]');
        this.$$addProduct=()=>$$('//span[text()="+"]');
        this.$$totalPriceCount=()=>$$('//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]');
        this.$eachPrice=(index)=>$(`(//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"])[${index}]`);
        this.$shippingCharge=()=>$('//p[text()="Shipping Charge"]/span[@class="font-semibold tracking-wide font-titleFont"]');
        this.$totPrice=()=>$('//p[text()="Total"]/span[@class="font-bold tracking-wide text-lg font-titleFont"]');
        this.$resetCart=()=>$('//button[text()="Reset cart"]');
        this.$cartIsEmpty=()=>$(`//h1[text()="Your Cart feels lonely."]`);
        this.$clickUserIcon=()=>$('//*[local-name()="svg"][@viewBox="0 0 320 512"]');
    }
    
    async addProductNumber(){
        let count = 2;
        for(let i=0; i<2; i++){
            this.$$addProduct()[i].click();
        }
        return count;
    }

    async getTotPrice(){
        let totCount=0;
        for(let i=1; i<=await this.$$totalPriceCount().length; i++){
            let price = await this.$eachPrice(i).getText();
            let split = price.replace("$",'');
            let converted = parseInt(split);
            totCount+=converted;
        }
        let shipping = await this.$shippingCharge().getText();
        let divide = shipping.replace("$",'');
        let convertInt = parseInt(divide);
        totCount+=convertInt;
        return totCount;
    }

    async clickReset(){
        await this.$resetCart().click();
    }

    async clickUserIcon(){
        await this.$clickUserIcon().click();
    }


}
export default new CartPage();