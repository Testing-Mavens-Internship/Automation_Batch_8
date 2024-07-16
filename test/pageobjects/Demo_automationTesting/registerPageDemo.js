import DemoCommon from "./commonDemo.js";
class Register extends DemoCommon{
    constructor(){
        super()
        this.$registerhead=()=>$(`//h2[text()="Register"]`)
        this.$fname=()=>$(`//input[@class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" and @placeholder="First Name"]`)
        this.$lname=()=>$(`//input[@class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" and @placeholder="Last Name"]`)
        this.$address=()=>$(`//div[@class="col-md-8 col-xs-8 col-sm-8"]/textarea`)
        this.$Email=()=>$(`//div[@id="eid"]/input`)
        this.$phone=()=>$(`//div[@class="col-md-4 col-xs-4 col-sm-4"]/input[@ng-model="Phone"]`)
        this.$gender=()=>$(`//div[@class="col-md-4 col-xs-4 col-sm-4"]/label/input[@value="Male"]`)
        this.$hobbies=()=>$(`//div[@class="col-md-4 col-xs-4 col-sm-4"]/div/input[@id="checkbox1"]`)
        this.$language=()=>$(`//div[@id="msdd"]`)
        this.$languageOption=()=>$(`//a[text()="Croatian"]`)
        this.$skills=()=>$(`//select[@id="Skills"]`)
        this.$skillsoption=()=>$(`//select[@id="Skills"]/option[normalize-space()="Adobe Photoshop"]`)
        this.$selectcountry=()=>$(`//span[@class="select2-selection select2-selection--single"]`)
        this.$selectcountryOption=()=>$(`//span[@class="select2-results"]//li[normalize-space()="Australia"]`)
        this.$hobbieheader=()=>$(`//label[text()="Hobbies"]`)
        this.$year=()=>$(`//select[@id="yearbox"]`)
        this.$yearoption=()=>$(`//select[@id="yearbox"]/option[@value="2001"]`)
        this.$month=()=>$(`//select[@placeholder="Month"]`)
        this.$monthoption=()=>$(`//select[@placeholder="Month"]/option[@value="February"]`)
        this.$day=()=>$(`//select[@id="daybox"]`)
        this.$dayoption=()=>$(`//select[@id="daybox"]/option[@value="13"]`)
        this.$password=()=>$(`//input[@id="firstpassword"]`)
        this.$confiirmpassword=()=>$(`//input[@id="secondpassword"]`)
        this.$choosefile=()=>$(`//input[@id="imagesrc"]`)


    }
    async enteringDetails(){
        await this.$fname().setValue("sidharth");
        await this.$lname().setValue("sidh");
        await this.$address().setValue("White House 1st Street")
        await this.$Email().setValue("sidharth2@gmail.com")
        await this.$phone().setValue("9638527412")
        await this.$gender().click();
        await this.$hobbies().click();
        await this.$language().click();
        await this.$languageOption().click();
        await this.$hobbieheader().click()
        await this.$skills().click();
        await this.$skillsoption().click();
        await this.$selectcountry().click();
        await this.$selectcountryOption().click()
        await this.$year().click();
        await this.$yearoption().click();
        await this.$month().click()
        await this.$monthoption().click();
        await this.$day().click();
        await this.$dayoption().click();
        await this.$password().setValue("qwerty123")
        await this.$confiirmpassword().setValue("qwerty123");
    
        const filepath='./test/expTest/Sidharth_KS_Resume (1).pdf'
        const remotefilepath=await browser.uploadFile(filepath)
        await this.$choosefile().setValue(remotefilepath)
        await browser.pause(10000)







    }
}
export default new Register();