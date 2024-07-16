import Common from '../index/common.js';

export class Register extends Common{
    constructor(){
        super();
            this.$registerHeader=()=>$(`//h2[text()="Register"]`);
            this.$fname=(name)=>$(`//input[@ng-model="${name}"]`);
            // this.$lname=()=>$(`//input[@ng-model="LastName"]`);
            // this.$email=()=>$(`//input[@ng-model="EmailAdress"]`);
            // this.$phone=()=>$(`//input[@ng-model="Phone"]`);
            this.$gender=()=>$(`//input[@value="FeMale"]`);
            this.$hobbies=()=>$(`//input[@id="checkbox2"]`);
            this.$languagebtn=()=>$(`//div[@id="msdd"]`);
            this.$language=()=>$(`//a[contains(text(),"English")]`);
            this.$clickHobbies=()=>$(`//label[text()="Hobbies"]`);
            // this.$country=()=>$(`//span[@class="selection"]`);
            // this.$clickcountry=()=>$(`//span[@title="India"]`);
            this.$year=()=>$(`//select[@id="yearbox"]`);
            this.$clickYear=()=>$(`//option[text()="2001"]`);
            this.$month=()=>$(`//select[@ng-model="monthbox"]`);
            this.$clickMonth=()=>$(`//option[text()="February"]`);
            this.$day=()=>$(`//select[@id="daybox"]`);
            this.$clickDay=()=>$(`//option[text()="6"]`);
            this.$password=()=>$(`//input[@id="firstpassword"]`);
            this.$secondPassword=()=>$(`//input[@id="secondpassword"]`);
            this.$uploadPath=()=>$(`//input[@id="imagesrc"]`);
    }

    async enterDetails(){
            await this.$fname("FirstName").setValue("Aleena");
            await this.$fname("LastName").setValue("Shaji");
            await this.$fname("EmailAdress").setValue("asdghjk@gmail.com");
            await this.$fname("Phone").setValue("2345678910");
            await this.$gender().click();
            await this.$hobbies().click();
            await this.$languagebtn().click();
            await this.$language().click();
            await this.$clickHobbies().click();
            // await this.$country().click();
            // await this.$clickcountry().click();
            await this.$year().click();
            await this.$clickYear().click();
            await this.$month().click();
            await this.$clickMonth().click();
            await this.$day().click();
            await this.$clickDay().click();
            await this.$password().setValue("Aleena@123");
            await this.$secondPassword().setValue("Aleena@123");
    }

    async uploadFile(){
        const filepath = 'uploadFile/photo.jpg';
        const remotePath= await browser.uploadFile(filepath);
        await this.$uploadPath().setValue(remotePath);
    }
}

export default new Register();