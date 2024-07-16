import Common from "./common.js";

class MainPage extends Common{
    constructor(){
        super();
        this.$header=()=>$(`//a[text()="Find out how to automate these controls without XPath"]`);
        this.$email=()=>$(`#shub63`);
        this.$password=()=>$(`#pass`);
        this.$company=()=>$(`(//input[@placeholder="Enter your company"])[1]`);
        this.$phoneNumber=()=>$(`(//input[@placeholder="Enter your mobile number"])[1]`)
        this.$userformSubmitButton=()=>$(`//button[text()="Submit"]`);


        this.$googleForm=()=>$(`//iframe[@id="coming google"]`);
        this.$formHeader=()=>$(`//div[text()="Cross Origin iframe Scenario"]`);
        this.$yesButton=()=>$(`//span[@class="aDTYNe snByac OvPDhc OIC90c" and text()="Yes"]`);
        this.$googleFormSubmitButton=()=>$(`//span[text()="Submit"]`);
        this.$logoHeader=()=>$(`(//slogan[text()="Innovation Inspired Automation!!"])[1]`);
    }

    /**
     * Function to switch to iframe that contains a google form
     */
    async switchToGoogleForm(){
        await this.$googleForm().scrollIntoView();
        const iframe = await this.$googleForm();
        await browser.switchToFrame(iframe);
    }

    /**
     * function to switch back to main page from the google form
     */
    async switchBackToMainPage(){
        await this.$yesButton().waitForClickable({timeout:5000})
        await this.$yesButton().click();
        await this.$googleFormSubmitButton().waitForClickable({timeout:5000})
        await this.$googleFormSubmitButton().click();
        await browser.switchToParentFrame();
    }

    async userFormDetails(email,password,company){
        await this.$email().setValue(email);
        await this.$password().setValue(password);
        await this.$company().setValue(company);
        await this.$phoneNumber().setValue(phoneNumber);
        await this.$googleFormSubmitButton().click();
    }
}
export default new MainPage()