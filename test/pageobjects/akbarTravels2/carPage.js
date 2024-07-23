import Common from "./common.js";

class CarPage extends Common{
    constructor(){
        super();
        this.$carPageLogo=()=>$(`//img[@class="logo"]`);
        this.$detailsHeading=()=>$(`//h4[text()="Select Your Service"]`);
        this.$city=()=>$(`//div[@id="airport-tab"]//input[@name="city_name"]`);
        this.$drop=()=>$(`//input[@id="drop-at-airport"]`);
        this.$location=()=>$(`//input[@id="location_search"]`);
        this.$next=()=>$(`//span[text()="Next"]`);
        this.$dateSelector=()=>$(`//input[@id="date2"]`);
        this.$calendar=()=>$(`//div[@id="ui-datepicker-div"]`);
        this.$date=()=>$(`//a[text()="21"]`);
        this.$timeSelector=()=>$(`//select[@id="time_picker1"]`);
        this.$time=()=>$(`//select[@id="time_picker1"]`);
        this.$timeSelecting=()=>$(`//option[@value="0:30"]`);
        this.$submitButton=()=>$(`//div[@id="airport-tab"]//button[@type="submit"]`);
        this.$bookButton=()=>$(`//div/h3[contains(text(),"ETIOS")]/../following-sibling::div/a[text()="Book"]`);
        this.$kilometers=()=>$(`//div/h3[contains(text(),"ETIOS")]/../following-sibling::div/h3`);
        this.$carName=()=>$(`//div/h3[contains(text(),"ETIOS")]`);
        this.$price=()=>$(`//I[@id="set_price1"]`);
        this.$finalprice=()=>$(`//h3[@class="strong"]`);
        this.$plane=()=>$(`//select[@id="airport_name"]/option`);
    }
    async enteringDetails(){
        await this.$city().setValue("Banglore");
        await browser.keys(['ArrowDown']);
        await browser.keys(['Enter']);
        await this.$drop().click();
        await this.$location().setValue("Kalyan Nagar, Bengaluru, Bengaluru Urban, Karnataka, India");
        await browser.keys(['ArrowDown']);
        await browser.keys(['Enter']);
        await this.$dateSelector().click();
        await this.$calendar().waitForDisplayed({timeout:5000,timeoutMsg:"calendar is not displaying."});
        await this.$next().click();
        await this.$date().click();
        await this.$timeSelector().click();
        await this.$time().click();
        await this.$timeSelecting().click();
        await this.$plane().waitForDisplayed({timeout:10000,timeoutMsg:"Plane is not displayed."});
        await this.$submitButton().click();
        await this.$carName().waitForDisplayed({timeout:5000,timeoutMsg:"Car details page is not displayed."});
        await this.$bookButton().click();
    }
}
export default new CarPage();