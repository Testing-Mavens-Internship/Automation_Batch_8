import CommonPage from "./commonPage.js";

export class ComponentsPage extends CommonPage{
    constructor(){
        super();
        this.$exploreComponentsHeader=()=>$(`//h1[text()="Explore Components"]`);
        this.$learnMoreSliderComponent=()=>$(`//a[@href="/components/slider"]`);
        this.$loadingAnimationLearnMoreBtn=()=>$(`//h2[contains(text(),"Loading Animation Component")]/following-sibling::a`);
        this.$popUpLearnMore=()=>$('//h2[contains(text(),"Pop Window")]/following-sibling::a');
        this.$tableComponentLearnMore=()=>$(`//a[@href="/components/table"]`);
    }
    /**
     * To click the learn more option of the pop window component.
     */
    async clickPopUpWindow(){
        await this.$popUpLearnMore().click();
        await browser.pause(5000)
    }
    /**
     * To click the learn more option of the table Component.
     */
    async clickTableContent(){
        await this.$componentsHeader().click();
        await this.$tableComponentLearnMore().click();
        await browser.pause(5000);
    }
}
export default new ComponentsPage();