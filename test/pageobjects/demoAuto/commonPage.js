export default class CommonPage{
    constructor(){} 
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://demo.automationtesting.in/');

    }
    async randomEmail(){
        let a= Math.floor(Math.random()*50);
        return `abc${a}@gmail.com`
    }
    async downloadUrl(){
        await browser.maximizeWindow();
        await browser.url('demo.automationtesting.in/FileDownload.html');
    }
}