import CommonPage from "../demoAutomation/common.js";
class RegisterPage extends CommonPage{
 
    constructor()
    {
        super();
 
        this.$fname = () => $('//input[@placeholder="First Name"]')
        this.$lname = () => $('//input[@placeholder="Last Name"]')
        this.$address = () => $('//textarea[@class="form-control ng-pristine ng-untouched ng-valid"]')
        this.$email = () =>$('//input[@type="email"]')
        this.$phone = () =>$('//input[@type="tel"]')
        this.$genderfemale = () =>$('//input[@value="FeMale"]')
        this.$hobbyMovies = () =>$('//label[@class="checks" and text()="Movies "]')
        this.$languages = () =>$('//div[@id="msdd"]')
        this.$languageArabic = () =>$('//a[text()="Arabic"]')
        this.$languageLabel = () =>$('//label[text()="Languages"]')
        this.$skillDropDown = () =>$('//select[@id="Skills"]')
        this.$specificSkill = () =>$('//option[@value="APIs"]')
        this.$selectCountry = () =>$('//span[@class="select2-selection select2-selection--single"]')
        this.$specificCountry =() =>$('//li[text()="India"]')
        this.$yearbox = () =>$('//select[@id="yearbox"]')
        this.$specificYear = () =>$('//option[@value=2000]')
        this.$month = () =>$('//select[@placeholder="Month"]')
        this.$specificMonth = () =>$('//option[@value="November"]')
        this.$day = () =>$('//select[@placeholder="Day"]')
        this.$specificDay= () =>$('//option[@value=21]')
        this.$password = () =>$('//input[@id="firstpassword"]')
        this.$confirmPassword = () =>$('//input[@id="secondpassword"]')
        this.$submitButton = () =>$('//button[@type="submit"]')
        this.$chooseFile=()=> $('//input[@id="imagesrc"]')
 
    }
 
    async register(fname,lname,address,email,phone,password,confirmPassword)
    {
        await this.$fname().setValue(fname)
        await this.$lname().setValue(lname)
        await this.$address().setValue(address)
        await this.$email().setValue(email)
        await this.$phone().setValue(phone)
        await this.$genderfemale().click();
        //await this.$hobbyMovies().click();
        //await this.$languages().click();
        //await this.$languageArabic().click();
        //await this.$languageLabel().click();
        //await this.$skillDropDown().click();
        //await this.$specificSkill().click();
        //await this.$selectCountry().click();
        await this.$yearbox().click();
        await this.$specificYear().click();
        await this.$month().click();
        await this.$specificMonth().click();
        await this.$day().click();
        await this.$specificDay().click();
        await this.$password().setValue(password)
        await this.$confirmPassword().setValue(confirmPassword)
       
 
 
    }
 
    async fileUpload() {
 
    const filePath = 'upload/uploadimg.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await this.$chooseFile().setValue(remoteFilePath)
   
    }
 
}
 
export default new RegisterPage();
 
