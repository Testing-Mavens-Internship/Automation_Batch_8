import commonPage from "./commonPage.js";
import productPage from "./productpage.js";

class LandingPage extends commonPage{
    constructor(){
        super();
        
        this.$$hoodieCount=()=>$$(`//li[@class="item product product-item"]`)
        this.$hoodieItem=(index)=>$(`//li[@class="item product product-item"][${index}]`)
    }
    async numProducts(){
        let hoodieCount=await this.$$hoodieCount().length
        return hoodieCount
    }

    async chooseHoodie(hoodieCount){
        await this.$hoodieItem(hoodieCount).click()
        await productPage.$header().waitForDisplayed({
            timeout:5000,
            timeoutMsg:"Header is not visible"
        })
    }   
}
export default new LandingPage()