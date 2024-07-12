 class LoginPage {
    constructor(){
        super();
        this.$email=()=>$('#email');
        this.$passWord=()=>$('#password');
        this.$login=()=>$('#submit');
    }
    async validLogin(){
        await this.$email().setValue("playground@tm.com");
        await this.$passWord().setValue("123456");
        await this.$login().click();
    

    } 
       
    }
    export default new LoginPage();