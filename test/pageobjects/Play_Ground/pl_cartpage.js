import CommonPl from "./pl_common.js";
class CartPage extends CommonPl{
    constructor(){
        super()
        this.$header=()=>$(`//h1[normalize-space()='Cart']`)
        this.$$plusButton=()=>$$(`//span[normalize-space()='+']`)
        this.$$noOfProducts=()=>$$(`//div[@class="mt-5"]//p[contains(text(),"$")]`);
        this.$singleProductPrice=(index)=>$(`(//div[@class="mt-5"]//p[contains(text(),"$")])[${index}]`);
        this.$shipingCharge=()=>$(`//p[contains(text(),"Ship")]/span[contains(text(),"$")]`);
        this.$total=()=>$(`//p[contains(text(),"Total")]/span[contains(text(),"$")]`)
        this.$reset=()=>$(`//button[normalize-space()='Reset cart']`)
        this.$usericon=()=>$(`//div[@class='flex items-center cursor-pointer space-x-2']//*[name()='svg' and @viewBox="0 0 448 512"]`)
        this.$logout=()=>$(`//li[text()='Log Out']`)
    }
    async clickIncrement(){
        for(let plus in this.$$plusButton()){
            await this.$$plusButton().click();
        }
        
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
        return price;
    }
async clickOnReset(){
    await this.$reset().click();
}

async clickOnUserIcon(){
    await this.$usericon().click();
}
async clickOnLogout(){
    await this.$logout().click();
}



}
export default new CartPage();