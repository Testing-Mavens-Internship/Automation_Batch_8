

import CommonPage from "./lm_CommonPage.js";
class  AccountCreatedPage extends CommonPage{

    constructor()
    {
        super();
        this.$accountCreatedHeader = () => $('//h1[@class="page-title my-3"]')
        this.$editAccount = () => $('//i[@class="fas fa-user-edit fa-fw mr-1"]')
        this.$successBanner = () => $('//div[@class="alert alert-success alert-dismissible"]')
        this.$changeLastName = () => $('//input[@name="lastname"]');
        this.$continueButton = () => $('//input[@value="Continue"]');
        this.$HomeIcon = () => $('//span[@class="title" and normalize-space(text())="Home"]');
       

    }



    async changeLastName()
    {
        this.$editAccount().click();
        await this.$changeLastName().setValue('AnilKumar');
        this.$continueButton().click();
       
    }

    async clickOnHome()
    {
        this.$HomeIcon().click();
    }
    
   


}


export default new  AccountCreatedPage();