import Common from "./common.js";

class RegisterPage extends Common{
    constructor(){
        super();
        this.$userId=()=>$(`#stripes--1611858611`);
        this.$newPassword=()=>$(`//input[@name="password"]`);
        this.$repeatPassword=()=>$(`//input[@name="repeatedPassword"]`);
        this.$fname=()=>$(`//input[@name="account.firstName"]`);
        this.$lname=()=>$(`//input[@name="account.lastName"]`);
        this.$email=()=>$(`//input[@name="account.email"]`);
        this.$phone=()=>$(`//input[@name="account.phone"]`);
        this.$address1=()=>$(`//input[@name="account.address1"]`);
        this.$address2=()=>$(`//input[@name="account.address2"]`);
        this.$city=()=>$(`//input[@name="account.city"]`);
        this.$state=()=>$(`//input[@name="account.state"]`);
        this.$zip=()=>$(`//input[@name="account.zip"]`);
        this.$country=()=>$(`//input[@name="account.country"]`);
        this.$languagePreference=()=>$(`//select[@name="account.languagePreference"]`);
        this.$english=()=>$(`//option[@value="english"]`);
        this.$favouriteCategory=()=>$(`//select[@name="account.favouriteCategoryId"]`);
        this.$dogsOption=()=>$(`//option[@value="DOGS"]`);
        this.$myList=()=>$(`//input[@name="account.listOption"]`);
        this.$myBanner=()=>$(`//input[@name="account.bannerOption"]`);
    }
    async 
}
export default new RegisterPage()