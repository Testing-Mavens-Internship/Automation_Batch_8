import CommonPage from "./pg_commonPage.js";
class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$(`//div[text()="PlayGround"]`)
        this.$userIcon=()=>$(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`);
        this.$login=()=>$(`//li[text()="Login"]`);

    }
    clickUsericon(){

    }
    clickLoginoption(){

    }
}
export default new LandingPage();