import CommonPage from "./at_commonPage.js";

export class RegisterPage extends CommonPage{
    constructor(){
        super();
        this.$registerHeader=()=>$(`//h2[text()="Register"]`);
        this.$firstName=()=>$(`//input[@ng-model="FirstName"]`);
        this.$lastName=()=>$(`//input[@ng-model="LastName"]`);
        this.$address=()=>$(`//textarea[@ng-model="Adress"]`);
        this.$email=()=>$(`//input[@ng-model="EmailAdress"]`);
        this.$phone=()=>$('//input[@ng-model="Phone"]');
        this.$genderMale=()=>$(`//input[@value="Male"]`);
        this.$genderFemale=()=>$(`//input[@value="FeMale"]`)
        this.$cricket=()=>$(`//input[@id="checkbox1"]`);
        this.$movies=()=>$(`//input[@id="checkbox2"]`);
        this.$language=()=>$(`//div[@id="msdd"]`);
        this.$english=()=>$(`//a[text()="English"]`);
        this.$skills=()=>$(`//select[@ng-model="Skill"]`);
        this.$randSkill=()=>$(`//option[text()="Certifications"]`);
        this.$country=()=>$(`//span[@id="select2-country-container"]`);
        this.$india=()=>$(`//option[text()="India"]`);
        this.$year=()=>$(`//select[@id="yearbox"]`)
        this.$randYear=()=>$(`//option[text()="1940"]`);
        this.$month=()=>$(`//select[@placeholder="Month"]`);
        this.$randMonth=()=>$(`//option[@value="August"]`);
        this.$day=()=>$(`//select[@id="daybox"]`);
        this.$randDay=()=>$(`//option[@value="10"]`);
        this.$password=()=>$(`//input[@ng-model="Password"]`);
        this.$confirmPswd=()=>$(`//input[@ng-model="CPassword"]`)
        this.$hobbies=()=>$(`//label[text()="Hobbies"]`);
        this.$upload=()=>$(`//input[@onchange="uploadimg()"]`)
        
    }
    async enterDetails(){

        await this.$firstName().setValue("krishna")
        await this.$lastName().setValue("k")
        await this.$address().setValue("testing mavens")
        await this.$email().setValue("dhiue123@gmail.com")
        await this.$phone().setValue("8585858585")
        await this.$genderMale().click()
        await this.$genderFemale().click()
        await this.$cricket().click()
        await this.$language().click()
        await this.$english().click()
        await this.$hobbies().click()
        await  this.$skills().click()
        await this.$randSkill().click()
        await this.$hobbies().click()
       // await this.$country().click()
       // await this.$india().click();
        //await this.$hobbies().click()
        await this.$year().click();
        await this.$randYear().click()
        await this.$month().click()
        await this.$randMonth().click()
        await this.$day().click()
        await this.$randDay().click()
        await this.$password().setValue("2224519@Kpgm")
        await this.$confirmPswd().setValue("2224519@Kpgm")
        
        
    }
    async upload(){
        const filepath= `hello.txt`;
        const remoteFilePath=await browser.uploadFile(filepath);
        await this.$upload().setValue(remoteFilePath)
    
    
        
    }
}
export default new RegisterPage()