class shopPage extends basePage {
    constructor() {
        super();
        this.$clrdropdownclk=()=> $('//span[text()="Shop by Color"/following-sibling::*[local-name()="svg" and @viewBox="0 0 20 20"]');
        this.$clr=()=>$(`//input[@type="checkbox" and @vid="Blue"]`);
        this.$product=()=>$(`//h2[text()="Dell XPS 13"]/parent::div/following-sibling::div//button`)
    }
    async clickProduct() {
        await this.$product().click()
    }
}
export default new shopPage();