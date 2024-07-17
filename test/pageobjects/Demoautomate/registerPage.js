import common from "./commonPAge.js";
class Register extends common{
    constructor(){
        super();
        this.$firstname=()=>$(`//input[@placeholder="First Name"]`);
        this.$lastname=()=>$(`//input[@placeholder="Last Name"]`);
        this.$address=()=>$(`//textarea[@ng-model="Adress"]`);
        this.$email=()=>$(`//input[@ng-model="EmailAdress"]`);
        this.$phone=()=>$(`//input[@ng-model="Phone"]`);
        this.$genderrb=()=>$(`//label[text()=" Male "]`);
        this.$hobbies=()=>$(`//input[@id="checkbox1"]`);
        this.$languagesdd=()=>$(`//div[@id="msdd"]`);
        this.$languagesoption=()=>$(`//a[text()="English"]`);
        this.$skillsdd=()=>$(`//select[@id="Skills"]`);
        this.$skillsoption=()=>$(`//option[@value="Analytics"]`);
        this.$countrydd=()=>$(`//span[@id="select2-country-container"]`);
        this.$country=()=>$(`//li[text()="India"]`);
        this.$yearofbirth=()=>$(`//select[@id="yearbox"]`);
        this.$yearofbirthoption=()=>$(`//option[@value="2001"]`);
        this.$monthofbirth=()=>$(`//select[@ng-model="monthbox"]`);
        this.$monthofbirthoption=()=>$(`//option[@value="January"]`);
        this.$dayofbirth=()=>$(`//select[@id="daybox"]`);
        this.$dayofbirthoption=()=>$(`//option[@value="15"]`);
        this.$pswd=()=>$(`//input[@id="firstpassword"]`);
        this.$confirmpswd=()=>$(`//input[@id="secondpassword"]`);
        this.$skilllabel=()=>$(`//label[text()="Skills"]`);
        this.$fileupload=()=>$(`//input[@id="imagesrc"]`);




    }
    async enterdetails(){
        await this.$firstname().setValue("Aswin");
        await this.$lastname().setValue("krish");
        await this.$address().setValue("abc house Ny");
        await this.$email().setValue("abc@gmail.com");
        await this.$phone().setValue(7676766787);
        await this.$genderrb().click();
        await this.$hobbies().click();
        await this.$languagesdd().click();
        await this.$languagesoption().click();
        await this.$confirmpswd().click();
        await this.$skillsdd().click();
        await this.$skillsoption().click();
        // await this.$countrydd().click();
        // await this.$country().click();
        await this.$yearofbirth().click();
        await this.$yearofbirthoption().click();
        await this.$monthofbirth().click();
        await this.$monthofbirthoption().click();
        await this.$dayofbirth().click();
        await this.$dayofbirthoption().click();
        await this.$pswd().setValue(12312312345);
        await this.$confirmpswd().setValue(12312312345);

        const filePath = './test/assets/textdata.csv';
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.$fileupload().setValue(remoteFilePath);
    }
}
export default new Register()