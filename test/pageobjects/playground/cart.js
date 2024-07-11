import playLogin from "../playLogin.js";
import Common from "./common.js";
class Cart extends Common{
    constructor(){
        super();
        this.$cartHeader=()=>$(`//h1[text()="Cart"]`);
        this.$$noOfProducts=()=>$$(`//div[@class="mt-5"]//p[contains(text(),"$")]`);
        this.$singleProductPrice=(index)=>$(`(//div[@class="mt-5"]//p[contains(text(),"$")])[${index}]`);
        this.$total=()=>$(`//p[contains(text(),"Total")]/span[contains(text(),"$")]`);
        this.$shipingCharge=()=>$(`//p[contains(text(),"Ship")]/span[contains(text(),"$")]`);
        this.$increment=(i)=>$(`(//span[text()="+"])[${i}]`);
        this.$vlaue=(item)=>$(`(//span[text()="-"]/following-sibling::p)[${item}]`);
        this.$resetbtn=()=>$(`//button[text()="Reset cart"]`);
        this.$emptycart=()=>$(`//h1[text()="Your Cart feels lonely."]`);
        this.$logout=()=>$(`//li[text()="Log Out"]`);
    }
    async calculatePrice(){
        let price=0;
        for(let i=1;i<=await this.$$noOfProducts().length;i++){
            let priceString=await this.$singleProductPrice(i).getText();
            let remove=priceString.replace("$"," ");
            let itemPrice=parseInt(remove);
            price+=itemPrice;           
        }
        let stringShip=await this.$shipingCharge().getText();
        let replaceShip=stringShip.replace("$","");
        let shipingCharge=parseInt(replaceShip);
        price+=shipingCharge;
        return price;
    }
    async increment(){
        for(let i=1;i<=2;i++){
        let num=await this.$vlaue(i).getText();
        let value=parseInt(num);
        if(value<=2){
            await this.$increment(i).click();
            }
        }
    }
    async clickreset(){
        await this.$resetbtn().click();
    }
    async logout(){
        await playLogin.$usericon().click();
        await this.$logout().click();

    }
}
export default new Cart();