import Common from '../playgroundAssignment/common.js'

export class Userlogin extends Common {
    constructor(){
        super();
     this.$loginHeader=()=> $('//p[text()="Login to your account"]');
     this.$email=()=> $('//input[@id="email"]');
     this.$password=()=> $('//input[@id="password"]');
     this.$loginbutton=()=> $('//button[text()="Login"]');
}

   async userLogin(email,password){
     await this.$email().setValue(`${email}`);
     await this.$password().setValue(`${password}`);
     await this.$loginbutton().click();
   }
}
export default new Userlogin();