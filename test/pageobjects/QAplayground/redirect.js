class redirect{

    constructor(){
        this.$redirect=()=>$('//a[@id="redirect"]')
        this.$page=(index)=>$(`//p[normalize-space()="Welcome to ${index} Page"]`)
        }
        async loadUrl(){
            await browser.maximizeWindow()
            await browser.url('https://qaplayground.dev/apps/redirect/');
        }
        async clickRedirection(){
            await this.$redirect().click();
            let text = ["Secound","Third","Fourth","Fifth","Sixth"];
            for(let item of text)
            await this.$page(item).waitForDisplayed({timeout: 10000, reverse: true});
        }
        

    }
export default new redirect()