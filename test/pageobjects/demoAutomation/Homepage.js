import Common from "./common.js";

class Homepage extends Common{
    constructor(){
        super();
        this.$signUp=()=>$(`//input[@id="email"]`);
        this.$logo=()=>$(`//img[@id="logo"]`);
        this.$signUpbtn=()=>$(`//img[@id="enterimg"]`);
        this.$homepageHeader=()=>$(`//h1[text()="Automation Demo Site "]`);
        this.$name=(name)=>$(`//input[@placeholder="${name}"]`);
        this.$address=()=>$(`//textarea[@ng-model="Adress"]`);
        this.$email=()=>$(`//input[@type="email"]`);
        this.$phone=()=>$(`//input[@type="tel"]`);
        this.$hobbie=()=>$(`//input[@id="checkbox1"]`);
        this.$language=()=>$(`//a[contains(text(),"English")]`);
        this.$languagebtn=()=>$(`//div[@id="msdd"]`);
        this.$skill=()=>$(`//option[@value="Android"]`);
        this.$skillbtn=()=>$(`//select[@id="Skills"]`);
        this.$year=()=>$(`//option[@value="1920"]`);
        this.$month=()=>$(`//option[@value="March"]`);
        this.$day=()=>$(`//option[@value="11"]`);
        this.$fpass=()=>$(`//input[@id="firstpassword"]`);
        this.$cpass=()=>$(`//input[@id="secondpassword"]`);
        this.$choosefile=()=>$(`//input[@id="imagesrc"]`);
    }
    async login(mail){
        await this.$signUp().setValue(mail);
        await this.$signUpbtn().click();
    }
    async enteringValues(mail){
        await this.$name("First Name").setValue("Solomon");
        await this.$name("Last Name").setValue("Joseph");
        await this.$address().setValue("esrdiuoommoij");
        await this.$email().setValue(mail);
        await this.$phone().setValue("1234567890");
        await this.$hobbie().click();
        await this.$languagebtn().click();
        await this.$language().click();
        // await this.$skillbtn().click();
        await this.$skill().click();
        await this.$year().click();
        await this.$month().click();
        await this.$day().click();
        await this.$fpass().setValue("1234567890");
        await this.$cpass().setValue("1234567890");
        await browser.pause(2000);
    }

    async uploadFile(){
    const filePath = 'SolomonJoseph.pdf'
    const remoteFilePath = await browser.uploadFile(filePath)

    await this.$choosefile().setValue(remoteFilePath)
    }
}
export default new Homepage();