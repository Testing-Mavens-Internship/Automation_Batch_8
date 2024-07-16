import commonPage from "./commonPage.js";

class landingPage extends commonPage{
    constructor() {
        super();
        this.$fname=()=>$(`//input[@placeholder="First Name"]`)
        this.$lname=()=>$(`//input[@placeholder="Last Name"]`)
        this.$address=()=>$(`//textarea[@ng-model="Adress"]`)
        this.$email=()=>$(`//input[@type="email"]`)
        this.$phone=()=>$(`//input[@type="tel"]`)
        this.$submit=()=>$(`//input[@value="Submit"]`)
        this.$gender=()=>$(`//input[@value="Male"]`)
        this.$hobbyText=()=>$(`//label[text()="Hobbies"]`)
        this.$hobbys=()=>$(`//input[@value="Hockey"]`)
        this.$languageBox=()=>$(`//div[@id="msdd"]`)
        this.$language=()=>$(`//a[text()="Croatian"]`)
        this.$skilldown=()=>$(`//select[@id="Skills"]`)
        this.$skill=()=>$(`//option[@value="Data Analytics"]`)
        // this.$contry=()=>$(`//select[@id="countries"]`)
        this.$country=()=>$(`//option[@value="Australia"]`)
        this.$year=()=>$(`//option[@value="1918"]`)
        this.$month=()=>$(`//option[@value="January"]`)
        this.$day=()=>$(`//option[@value="1"]`)
        this.$password=()=>$(`//input[@id="firstpassword"]`)
        this.$confirmpassword=()=>$(`//input[@id="secondpassword"]`)
        this.$submit=()=>$(`//button[normalize-space()="Submit"]`)
        this.$upload=()=>$(`//input[@type="file"]`)
        this.$download=()=>$(`//div[@style="text-align: center;"]//a[normalize-space()="Download"]`)
    }

    async login() {
        await this.$fname().setValue('Nikhil')
        await this.$lname().setValue('D')
        await this.$address().setValue('Pune')
        await this.$email().setValue('Nikhi@123')
        await this.$phone().setValue('1234567890')
        await this.$submit().click()
        await this.$gender().click()
        await this.$hobbyText().click()
        await this.$hobbys().click()
        await this.$languageBox().click()
        await this.$language().click()
        //await this.$skilldown().click()
        // await this.$skill().click()
        await this.$country().click()
        await this.$year().click()
        await this.$month().click()
        await this.$day().click()
        await this.$password().setValue('Nikhi@123')
        await this.$confirmpassword().setValue('Nikhi@123')
        await this.$download()
        
    }

    async uploadFile(){
        const filePath='testData/new.pdf'
        const remoteFilePath= await browser.uploadFile(filePath)
        await this.$upload().setValue( remoteFilePath)
        await this.$submit().click()
    }

    
export default new landingPage()