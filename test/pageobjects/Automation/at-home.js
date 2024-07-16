import commonauto from "./at-common.js";

class homeauto extends commonauto
{
    constructor()
    {
        super()
         this.$firstname=()=>$('//input[@placeholder="First Name"]');
         this.$lastname=()=>$('//input[@placeholder="Last Name"]');
         this.$txtarea=()=>$('//textarea[@class="form-control ng-pristine ng-untouched ng-valid"]')
         this.$email=()=>$('//input[@type="email"]')
         this.$phn=()=>$('//input[@type="tel"]')
         this.$radio=()=>$('//input[@type="radio" and @value="Male"]')
         this.$chkbox=()=>$('//input[@type="checkbox" and @value="Movies"]')
         this.$langselect=()=>$('//div[@id="msdd"]')
         this.$langoptn=()=>$('//a[text()="Croatian"]')
         this.$skillselect=()=>$('//select[@id="Skills"]')
         this.$skilloptn=()=>$('//select[@id="Skills"]/option[@value="Analytics"]')
         this.$slctcntry=()=>$('//option[@value="Australia"]')
        //  this.$slctcntryoptn=()=>$('//span[@title="Hong Kong"]')
         this.$dobyear=()=>$('//select[@placeholder="Year"]')
         this.$dobyrslct=()=>$('//select[@placeholder="Year"]/option[@value="1916"]')
         this.$dobmnth=()=>$('//select[@placeholder="Month"]')
         this.$dobmnthslct=()=>$('//select[@placeholder="Month"]/option[@value="February"]') 
         this.$day=()=>$('//select[@placeholder="Day"]')
         this.$dayoptn=()=>$ ('//select[@placeholder="Day"]/option[@value="2"]') 
         this.$fstpswd=()=>$('//input[@id="firstpassword"]')
         this.$scndpswd=()=>$('//input[@id="secondpassword"]')
         this.$demo=()=>$('//label[normalize-space()="Languages"]')
         this.$upld=()=>$('//input[@id="imagesrc"]')
         this.$btn=()=>$('//button[@type="submit"]')

        }
        async enterdetail()
        {
            await this.$firstname().setValue("Mithun")
            await this.$lastname().setValue("Kumar")
            await this.$txtarea().setValue("abcdefghiu")
            await this.$email().setValue("mithun@gmail.com")
            await this.$phn().setValue("884674884")
            await this.$radio().click()
            await this.$chkbox().click()
            await this.$langselect().click()
            // await this.$langoptn().waitForDisplayed({timeout:5000})
            await this.$langoptn().click()
            await this.$demo().click()
            // await this.$langoptn().waitForDisplayed({reverse:true})
            await this.$skillselect().click()
            await this.$skilloptn().click()
            await this.$demo().click()
            await this.$slctcntry().click()
            // await this.$slctcntryoptn().click()
            await this.$demo().click()
            await this.$dobyear().click()
            await this.$dobyrslct().click()
            await this.$demo().click()
            await this.$dobmnth().click()
            await this.$dobmnthslct().click()
            await this.$demo().click()
            await this.$day().click()
            await this.$dayoptn().click()
            await this.$demo().click()
            await this.$fstpswd().setValue("mithun@123")
            await this.$scndpswd().setValue("mithun@123")
            
        }
        async upload()
        {
            let path="abc.txt"
            let remote=await browser.uploadFile(path)
            await this.$upld().setValue(remote)
            // await this.$btn().click()
        }
        async download()
        {
            
        }
}
export default new homeauto();