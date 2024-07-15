import common from "./commonPage.js";
class Home extends common{
    constructor(){
        super();
        this.$trendingheader=()=>$(`//h3[text()="Top Trending Categories"]`);
        this.$firsttrendingcategory=()=>$(`//img[@alt="Desktops"]`);
    }
    async ClickTrendingCategory(){
        await this.$trendingheader().scrollIntoView();
        await this.$firsttrendingcategory().click();
    }
}export default new Home();