import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
//export default class Page {
    
    // open (path) {
    //     browser.maximizeWindow();
    //     return browser.url(`https://the-internet.herokuapp.com/${path}`)
        
    // }

    export default class Page{

        

        constructor()
        {
        
        this.$header = () =>$('//div[text()="Swag Labs"]');
       
        
        
        }

        async loadUrl(){

            
            await browser.url('https://www.saucedemo.com/');
            browser.maximizeWindow();

        }

    }