import Common from "./common.js";
import path from 'path';

class Homepage2 extends Common{
    constructor(){
        super();
        this.$Downloadbtn=()=>$(`//div[@class="cont_box"]/div/a`)
    }
    // async Downloadclick(){
    //     await this.$Downloadbtn().click();
    //     await browser.pause(5000)
    // }
    async Download(){
        const downloadDir = path.join(process.cwd(), 'testData');   
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
        await this.$Downloadbtn().click();
 
        await browser.pause(3000)
}
}
export default new Homepage2();