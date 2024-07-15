import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$homepageHeader=()=>$(`//h3[text()="Top Trending Categories"]`);
        this.$firstItem=()=>$(`(//figure[@class="figure img-top"])[1]`)
    }
    async clickFirstItem(){
        await this.$firstItem().click();
    }
    

}
export default new HomePage()