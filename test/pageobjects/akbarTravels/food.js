import Common from "./common.js";

class Food extends Common {
    constructor() {
        super();
        this.$famWithKid = () => $(`//li[@class="themes40"]//div[@class="checkbox"]`);
        this.$akbarReco = () => $(`//li[@class="themes39"]//div[@class="checkbox"]`);
        this.$foodHeader = () => $(`//h1[normalize-space()="Food Packages"]`);
        this.$scrollToRecomend = () => $(`//h5[contains(text(),"Recommended For")]`);
        this.$packageDetailButton = (name) => $(`//h3[normalize-space()="${name}"]//ancestor::div[@class="wrapper "]//button`);
        this.$usernameHeading = () => $('//div[@class="headings"]/h2');
    }
    async clickFilter() {
        await this.$akbarReco().click();
        await this.$famWithKid().click();
    }
    async clickPackageDetail(name) {
        await this.$packageDetailButton(name).click();
    }

}
export default new Food();