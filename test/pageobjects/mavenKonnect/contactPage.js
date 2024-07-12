import CommonPage from "./commonPage.js";

class contactPage extends CommonPage {
  constructor() {
    super();
    this.$fullname = () => $('//input[contains(@placeholder, "Full Name")]');
    this.$email = () => $('//input[@placeholder="Email"]');
    this.$phoneNumber = () => $('//input[@placeholder="Phone number"]');
    this.$message = () => $('//input[@placeholder="Message"]');
    this.$sendButton = () => $('//button[normalize-space(text())="SEND"]');
  }

  async addDetails(name, email, contact, message) {
    await this.$fullname().setValue(name);
    await this.$email().setValue(email);
    await this.$phoneNumber().setValue(contact);
    await this.$message().setValue(message);

    // await browser.pause(3000)
    await this.$sendButton().waitForClickable({
      timeout: 5000,
      timeoutMsg: "Send button is not clickable",
    });
    await this.$sendButton().click();
  }
}
export default new contactPage();
