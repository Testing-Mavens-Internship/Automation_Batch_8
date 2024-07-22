import Common from "./common.js";

export class Redirect extends Common{
    constructor(){
        super();
            this.$start=()=>$(`//a[@id="redirect"]`);
            this.$text=(text)=>$(`//p[contains(text(),"${text}")]`);
            this.$chainheader=()=>$('//a[text()="Start Redirection chain"]');
            this.$chainvalidater=()=>$('//a[@class="btn btn-green"]');
            this.$page=(url)=>$(`https://qaplayground.dev/apps/redirect/["${url}"]`);
            this.$lastpage=()=>$('//p[text()="Welcome to the Last Page"]');
    }

    /**
     * Should click on start button
     */
    async clickStart(){
        await this.$start().click();
    }

    /**
     * Should redirect
     */
    async checkRedirect(){
        {
            for(let pg of tests.Pages)
                {
                    await this.$text(pg).waitForDisplayed({reverse:true,timeout:5000})
                }
     
        } 
    }
}

export default new Redirect();

