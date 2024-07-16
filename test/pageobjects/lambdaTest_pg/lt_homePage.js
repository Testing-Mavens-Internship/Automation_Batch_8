import CommonPage from "./lt_commonPage.js";

export class HomePage extends CommonPage{
    constructor(){
        super();
        this.$topTrendingHeader=()=>$(`//h3[text()="Top Trending Categories"]`);
        this.$topFirstItem=()=>$(`(//img[@class="figure-img img-fluid lazy-load"])[1]`)
    }
    async selectFirstItem(){
        await this.$topFirstItem().scrollIntoView();
        await this.$topFirstItem().waitForClickable({timeout:50000,timeoutMsg:"Option still not clicked."});
        await this.$topFirstItem().click();
    }
}
export default new HomePage();