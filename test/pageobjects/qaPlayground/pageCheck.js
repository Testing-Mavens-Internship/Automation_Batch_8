class pageCheck{
    constructor(){
        this.startButton=()=>$(`//a[@id="redirect"]`)
        this.$lastPage=()=>$(`//p[normalize-space()="Welcome to the Last Page"]`)
        this.$eachPage=(index)=>$(`//p[normalize-space()="Welcome to ${index} Page"]`)

    }

async loadUrl(){
    await browser.url('https://qaplayground.dev/apps/redirect/')
}


async check(){
    await this.startButton().click();
    let text = ["Secound","Third","Fourth","Fifth","Sixth"];
    for(let item of text)
    await this.$eachPage(item).waitForDisplayed({timeout: 10000, reverse: true});

}

}
export default new pageCheck();
