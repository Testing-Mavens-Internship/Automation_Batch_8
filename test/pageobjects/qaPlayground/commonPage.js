export default class Common {
    constructor(){
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://qaplayground.dev/apps/sortable-list/");
    }
}