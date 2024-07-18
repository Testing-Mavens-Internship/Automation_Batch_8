import common from "./commonPage.js";
class Landing extends common{
    constructor(){
        super();
        this.$logo=()=>$(`//a[@class="logo"]`);
        this.$menCategory=(category)=>$(`//a[@id="ui-id-5"]/span[text()="${category}"]`);
        this.$mensTop=()=>$(`//li[@class="level1 nav-3-1 category-item first parent ui-menu-item"]/a`);
        this.$mensJacket=()=>$(`//li[@class="level2 nav-3-1-1 category-item first ui-menu-item"]`);

    }
    /**
     * Method to select men's Jacket
     */
    async selectCategory(){
        await this.$menCategory("Men").moveTo();
        await this.$mensTop().moveTo();
        await this.$mensJacket().moveTo();
        await this.$mensJacket().click();
    }
} export default new Landing();