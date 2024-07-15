import Common from "./common.js";

class RegisterPage extends Common{
    constructor(){
        super();
        this.$header=()=>$(`//h2[text()="Register"]`);
        this.$fname=()=>$(`//input[@ng-model="FirstName"]`);
        this.$lname=()=>$(`//input[@ng-model="LastName"]`);
        this.$address=()=>$(`//textarea[@ng-model="Adress"]`);
        this.$email=()=>$(`//input[@ng-model="EmailAdress"]`);
        this.$phone=()=>$(`//input[@ng-model="Phone"]`);
        this.$radioSelectMale=()=>$(`//input[@value="Male"]`);
        this.$hobbies=()=>$(`//input[@id="checkbox2"]`);
        this.$language=()=>$(`//div[@id="msdd"]`);
        this.$languageoption=()=>$('//a[text()="Croatian"]');
        this.$labelLanguage=()=>$(`//label[text()="Languages"]`);
        this.$skill=()=>$(`//select[@id="Skills"]//option[@value="Analytics"]`);
        // this.$country=()=>$(`//select[@id="countries"]`);
        this.$selectCountry=()=>$(`//span[@class="select2-selection select2-selection--single"]`);
        this.$selectCountryOption=()=>$(`//option[@value="Australia"]`);
        this.$dobYear=()=>$(`//select[@id="yearbox"]//option[@value="1916"]`);
        this.$dobMonth=()=>$(`//select[@ng-model="monthbox"]//option[@value="October"]`);
        this.$dobDay=()=>$(`//select[@id="daybox"]//option[@value="18"]`);
        this.$password=()=>$(`//input[@id="firstpassword"]`);
        this.$confirmPassword=()=>$(`//input[@id="secondpassword"]`);
        this.$upload=()=>$(`//input[@id="imagesrc"]`);
        this.$submitButton=()=>$(`//button[@id="submitbtn"]`);
    }

    async fillRegisterDetails(fname,lname,address,email,phone,password,confirmPassword){
        await this.$fname().setValue(fname);
        await this.$lname().setValue(lname);
        await this.$address().setValue(address);
        await this.$email().setValue(email);
        await this.$phone().setValue(phone);
        await this.$radioSelectMale().click();
        await this.$hobbies().click();
        await this.$language().click();
        await this.$languageoption().click();
        await this.$labelLanguage().click();
        await this.$skill().click();
        await this.$selectCountry().click();
        await this.$selectCountryOption().click();
        await this.$dobYear().click();
        await this.$dobMonth().click();
        await this.$dobDay().click();
        await this.$password().setValue(password);
        await this.$confirmPassword().setValue(confirmPassword);
        
    }
    async uploadFile(upload){
        let file='testData/hello.txt'
        let filePath=await browser.uploadFile(file)
        await this.$upload().setValue(filePath);
        await this.$submitButton().click();

    }
}
export default new RegisterPage()