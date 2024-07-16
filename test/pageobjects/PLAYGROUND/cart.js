import CommonPage from "./commonPage.js";

export class CartPage extends CommonPage{
    constructor(){
        super();
        this.$cartHeader=()=>$(`//h1[text()="Cart"]`)
        this.$$increment=()=>$$(`//span[text()="+"]`)
        this.$$priceCount=()=>$$('//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]/p')
        this.$exactPrice=(index)=>$(`(//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]/p)[${index}]`)
        this.$shippingCarge=()=>$('//p[text()="Shipping Charge"]//span[@class="font-semibold tracking-wide font-titleFont"]')
        this.$totalPrice=()=>$('//span[@class="font-bold tracking-wide text-lg font-titleFont"]')
        this.$reset=()=>$(`//button[text()="Reset cart"]`)
        this.$cartEmpty=()=>$(`//h1[text()="Your Cart feels lonely."]`)
        this.$userIcon=()=>$(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`);
        this.$logoutOpt=()=>$(`//li[text()="Log Out"]`)
    }
    async increaseQuantity(){
        let quantity=2;
        for(let i=0;i<=quantity;i++){
            await this.$$increment()[i].click();
        }
        return quantity;
    }
    async compareSum(){
        let totalPrice=0;
        for(let i=1;i<=await this.$$priceCount().length;i++){
            let price= await this.$exactPrice(i).getText();
            let removeDollar=price.replace('$','')
            let int=parseFloat(removeDollar)
            totalPrice+=int
        }
        let ship=await this.$shippingCarge().getText();
        let shipDol=ship.replace('$','')
        let shipPrize=parseFloat(shipDol)
        let total=totalPrice+shipPrize;
        console.log(totalPrice,shipPrize,total)
 
        return total
    }
    async resetCart(){
        await this.$reset().click();

    }
    async logOut(){
        await this.$userIcon().click();
        await this.$logoutOpt().click();
        
    }
    }

export default new CartPage();