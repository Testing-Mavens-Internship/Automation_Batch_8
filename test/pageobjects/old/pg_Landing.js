import common from "./pg_commonpage.js";
class Landing extends common
{
    constructor()
    {
        super();
        this.$icon=()=>$('//*[local-name()="svg" and @viewBox="0 0 320 512"]');
        this.$logintxt=()=>$('//li[text()="Login"]');
    }
    async usericonclick()
    {

    }
    async logintextclick()
    {

    }
}
export default new Landing(); 