import DemoCommon from "./commonDemo.js";
class DownloadFile extends DemoCommon{
    constructor(){
        super()
        this.$downloadbutton=()=>$(`//a[@class="btn btn-primary"]`)
        this.$enterData=()=>$(`//textarea[@id="textbox"]`)
        this.$clickGenerate=()=>$(`//button[@id="createTxt"]`)
        this.$GeneratedFiledownload=()=>$(`//a[@id="link-to-download"]`)
    }
    async ClickOndownload(){
        await this.$downloadbutton().click();
    }


}
export default new DownloadFile();