import { browser } from '@wdio/globals'
export default class CommonPage {
    constructor(){
        
    }

    async loadUrl(){
        await browser.url('https://precisiontech.uk/');
        
    }
   
}
