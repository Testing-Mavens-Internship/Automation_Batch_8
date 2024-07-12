import common from "./commonPage.js";
class Products extends common{
    constructor(){
        super();
        this.$productsheader =()=>$(`//h1[@class="collection-hero__title"]`);
        this.$sort = ()=>$(`//select[@id="SortBy"]`);
        this.$sortbyztoa =()=>$(`//*[@id="SortBy"]/option[contains(text(), "Alphabetically, Z-A")]`);
        this.$$productsname =()=>$$(`//li[@class="grid__item scroll-trigger animate--slide-in"]//h3[@class="card__heading h5"]/a`);
        this.$scroll=()=>$(`//h2[@class="footer-block__heading rte"]`);
    }
    async clickSortby() {
        let productlist = [];
        
        for (let product of await this.$$productsname()) {
            await product.waitForDisplayed({ timeout: 4000, timeoutMsg: 'Product not displayed' });
            productlist.push((await product.getText()).trim());
        }
        
        productlist.sort();
        productlist.reverse();
        
        await this.$sort().click();
        await this.$sortbyztoa().click();
        // await this.$scroll().scrollIntoView();
        await browser.pause(10000);
        
        
        
        
        
        

        
        
        // let count = 0;
        // for (let product of await this.$$productsname()) {
        //     await product.waitForDisplayed({ timeout: 4000, timeoutMsg: 'Product not displayed' });
        //     const currentProductText = (await product.getText()).trim();
            
        //     if (currentProductText !== productlist[count]) {
        //         console.log(`Mismatch at position ${count + 1}: Expected ${productlist[count]}, Found: ${currentProductText}`);
        //     }
        //     count += 1;
        // }
    }
    
    
}
export default new Products();



