import common from "./commonPage.js"
class Downloadpackages extends common{
    constructor(){
        super();
        this.$name=()=>$(`//input[@id="pkgenqName"]`);
        this.$email=()=>$(`//input[@id="pkgenqEmail"]`);
        this.$phone=()=>$(`//input[@id="pkgenqMobile"]`);
        this.$submit=()=>$(`//button[@id="pkgdwnldSubmitBtn"]`);
        this.$downloadPackageHeader=()=>$(`//h2[text()="Download Package"]`);
    }
    async enterDetailsToDownloadPackage(){
        await this.$name().setValue("aswin");
        await this.$email().setValue("abcdemo@gmail.com");
        await this.$phone().setValue(7878676767);
        await this.$submit().click();
    }
}export default new Downloadpackages();