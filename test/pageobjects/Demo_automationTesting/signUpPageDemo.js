import DemoCommon from "./commonDemo.js";
import registerPageDemo from "./registerPageDemo.js";
class SignUp extends DemoCommon{
    constructor(){
        super()
        this.$emailTextBox=()=>$(`//input[@id="email"]`)
        this.$enter=()=>$(`//img[@id="enterimg"]`)
    }

    async enteringEmail(){
        //let x=Math.random()*100;
        let b=Math.floor((Math.random()*100))

        await this.$emailTextBox().setValue(`sidharth${b}@gmail.com1`)
        await this.$enter().click();

    }
    
}
export default new SignUp();