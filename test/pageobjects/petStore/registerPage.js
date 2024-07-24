import commonPage from "./commonPage.js";

class registerPage extends commonPage {
    constructor() {
        super();
        this.$header=()=>$('//h3[contains(text(),"User Information")]')
        this.$username=()=>$(`//input[@name="username"]`)
        this.$password=()=>$(`//input[@name="password"]`)
        this.$firstName=()=>$(`//input[@name="account.firstName"]`)
        this.$lastName=()=>$(`//input[@name="account.lastName"]`)
        this.$email=()=>$(`//input[@name="account.email"]`)
        this.$phoneNumber-
    }

}