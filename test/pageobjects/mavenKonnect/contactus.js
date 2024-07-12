import common from "./common.js";

class Contactus extends common {
    constructor() {
        super();
        this.$fullname = () => $(`//input[@placeholder="Full Name "]`);
        this.$email = () => $(`//input[@placeholder="Email"]`);
        this.$phone = () => $(`//input[@placeholder="Phone number"]`);
        this.$message = () => $(`//input[@placeholder="Message"]`);
        this.$submitbutton = () => $(`//button[text()="       SEND "]`);
        this.$thankyouheader = () => $(`//h1[text()="THANK YOU!"]`);
        this.$homepagemenu = () => $(`//a[text()="Home "]`);
    }

    async contactdetails(name, email, phone, message) {
        console.log(`first name: ${name}`);
        await this.$fullname().setValue(name);
        await this.$email().setValue(email);
        await this.$phone().setValue(phone);
        await this.$message().setValue(message);
        await this.$submitbutton().click();
        await browser.waitUntil(
            async () => await browser.isAlertOpen(),
            {
                timeout: 5000,
                timeoutMsg: "Alert is not displayed"
            }
        );
        await browser.acceptAlert();
        await expect(this.$thankyouheader()).toBeDisplayed();
    }

    async loadhomepage() {
        await this.$homepagemenu().click();
        await browser.pause(15000)
    }
}

export default new Contactus();