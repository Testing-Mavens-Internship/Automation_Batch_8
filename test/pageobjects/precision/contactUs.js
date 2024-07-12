import Common from '../precision/common.js'

export class Contact extends Common{
     constructor(){
        super();
        this.$contactUs=()=> $('//strong[text()="CONTACT US"]');
        this.$cookie=()=>$('//button[text()="Accept"]');
        this.$cart=()=>$('//a[@id="cart-icon-bubble"]//*[local-name()="svg"]');
        
     }
     async cookie(){
        await this.$cookie().click();
     }
     async cartPage(){
        await this.$cart().click();
     }
}

export default new Contact();