import CommonPage from "./commonPage.js";
class HomePage extends CommonPage {
    constructor() {
      super()
      this.$header=()=>$(`//div[text()="PlayGround"]`);
      this.$component=()=>$('//a[text()="Components"]');
    }
    /**
     * click on the component option in the navigation bar
     */
    async componentClick(){
        await this.$component().click();
    }
}
export default new HomePage()