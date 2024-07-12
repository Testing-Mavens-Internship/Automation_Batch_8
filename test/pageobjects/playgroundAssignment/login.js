import Common from '../playgroundAssignment/common.js';

export class Login extends Common{
    constructor(){
        super();
        this.$username=()=> $('//input[@name="username"]');
        this.$password=() => $('//input[@name="password"]');
        this.$signin=() => $('//button[text()="Sign In"]');
    }
    async login(username, password){
        await this.$username().setValue(`${username}`);
        await this.$password().setValue(`${password}`);
        await this.$signin().click();
    }
}
export default new Login();