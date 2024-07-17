import common from "./commonPAge.js";

class LandingPage extends common {
    constructor() {
        super();
        this.$email = () => $(`//input[@id="email"]`);
        this.$submit =() =>$(`//img[@id="enterimg"]`);
        
    }

    async enteremail() {
        const randnum = Math.floor(Math.random() * 100)+20;
        await this.$email().setValue(`abc${randnum}@gmail.com`);
        await this.$submit().click();
    }
}

export default new LandingPage();

