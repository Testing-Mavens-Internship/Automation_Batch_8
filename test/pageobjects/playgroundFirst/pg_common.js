
    export default class CommonPage{

      
        constructor()
        {
        
        this.$logolocator = () =>$('//div[@class="flex items-center justify-between h-full"]/child::a/child::div[text()="PlayGround"]');
    
        
        }

        async LauchUrl(){

            
            await browser.url('https://www.playground.testingmavens.tools');
            browser.maximizeWindow();

        }

    }