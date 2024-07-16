import CommonPage from "./commonPage.js";
class HomePage extends CommonPage{
    constructor(){
        super();
        this.$firstname=()=>$('//input[@ng-model="FirstName"]');
        this.$lastname=()=>$('//input[@ng-model="LastName"]')
        this.$address=()=>$('//textarea[@ng-model="Adress"]');
        this.$year=()=>$('//option[@value="1917"]');
        this.$month=()=>$('//option[@value="January"]');
        this.$day=()=>$('//option[@value="1"]');
        this.$email=()=>$('//input[@type="email"]')
        this.$phone=()=>$('//input[@ng-model="Phone"]');
        this.$gender=()=>$('//input[@value="Male"]');
        this.$hobby=()=>$('//input[@id="checkbox2"]');
        this.$language=()=>$('//div[@id="msdd"]');
        this.$skills=()=>$('//input[@value="Adobe InDesign"]');
        //this.$country=()=>$('//select[@id="countries"]');
        this.$selectCountry=()=>$('//span[@role="combobox"]')
        this.$typeCountry=()=>$('//input[@type="search"]');
        this.$confirmPassword=()=>$('//input[@id="secondpassword"]');
        this.$password=()=>$('//input[@id="firstpassword"]')
        this.$chooseFile=()=>$('//input[@id="imagesrc"]')
    }
    
    
    async enterDetails(firstname,lastname,address,email,phone,language,typeCountry,password,confirmPassword){
        await this.$firstname().setValue(firstname);
        await this.$lastname().setValue(lastname);
        await this.$address().setValue(address);
        await this.$email().setValue(email);
        await this.$phone().setValue(phone);
        await this.$gender().click();
        await this.$hobby().click();
        await this.$year().click();
        await this.$month().click();
        await this.$day().click();
       // await this.$language().setValue(language);
        //await this.$country().click();
        await this.$selectCountry().click();
        await this.$typeCountry().setValue(typeCountry);
        await this.$password().setValue(password);
        await this.$confirmPassword().setValue(confirmPassword);

    }
    async uploadFile(){
        const filePath = 'testData/ffg.txt'
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.$chooseFile().setValue(remoteFilePath);

    }

}
export default new HomePage();