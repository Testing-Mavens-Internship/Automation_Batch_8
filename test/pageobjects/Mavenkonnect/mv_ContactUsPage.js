

import CommonPage from "./mv_CommonPage.js";

class ContactUsPage extends CommonPage {

    constructor()
    {
        super();
        this.$fullname = () => $('//input[contains(@placeholder, "Full Name")]')
        this.$email = () => $('//input[@placeholder="Email"]')
        this.$phoneNumber = () => $('//input[@placeholder="Phone number"]')
        this.$message = () => $('//input[@placeholder="Message"]')
        this.$sendButton = () => $('//button[normalize-space(text())="SEND"]')
        this.$thankYouHeader = () =>$('//h1[@class="site-header__title"][text()="THANK YOU!"]')
        
    }


    async enterContactDetailsOne(name,email,phone,message)
    {

        await this.$fullname().setValue(name);
        await this.$email().setValue(email);
        await this.$phoneNumber().setValue(phone);
        await this.$message().setValue(message);
        await this.$sendButton().click();
    }

    // async enterContactDetailsTwo()
    // {

    //     await this.$fullname().setValue('Latha Anilkumar');
    //     await this.$email().setValue('latha@gmail.com');
    //     await this.$phoneNumber().setValue('945786654');
    //     await this.$message().setValue('Hello');
    //     await this.$sendButton().click();
    // }

    // async enterContactDetailsThree()
    // {

    //     await this.$fullname().setValue('Krishnapriya PA');
    //     await this.$email().setValue('krishna@gmail.com');
    //     await this.$phoneNumber().setValue('9457895621');
    //     await this.$message().setValue('Hello');
    //     await this.$sendButton().click();
    // }

   
}

export  default new ContactUsPage();