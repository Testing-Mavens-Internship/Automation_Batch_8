import CommonPage from "./commonPage.js"
class ComponentPage extends CommonPage{
    constructor(){
        super();
        this.$componentHeader=()=>$(`//h1[text()="Explore Components"]`);
        this.$selectComponent=(name)=>$(`//h2[text()="${name}"]/parent::div/child::a[text()="Learn more"]`);
    }
    /**
     * Clicking learn more for components
     * @param {number} name 
     */
    async learnMore(name){
        await this.$selectComponent(name).click();
    }
}
export default new ComponentPage()