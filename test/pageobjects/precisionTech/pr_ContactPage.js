import CommonPagePrecision from "./pr_Common.js";

class ContactPage extends CommonPagePrecision {

        

    constructor()
    {
        super();
        this.$clickOnCartBotton = () => $('//a[@class="header__icon header__icon--cart link focus-inset"]');
       
        
    }

    async CartButtonclick() 
    {
        await this.$clickOnCartBotton().click(); 
    }

}  




export default new ContactPage();
