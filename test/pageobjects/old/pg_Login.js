import common from "./pg_commonpage.js";
class Logs extends common
{
    constructor()
    {
    super();
    this.$usrname=()=>$('//input[@id="email"]');
    this.$usrpswd=()=>$('//input[@id="password"]');
    this.$loginbtn=()=>$('//button[text()="Login"]');     

    }
    async loginwithcredentials()
    {

    }
}
export default new Logs()