import Common from '../index/common.js';

export class Landing extends Common {
    constructor(){
        super();
            this.$signUp=()=>$(`//input[@id="email"]`);
            this.$signUpButton=()=>$(`//img[@id="enterimg"]`);
    }
    /**
     * To generate random email addresses
     */
    async generateEmail(){
            const emailPrefix = Math.floor(Math.random() * 1000);
            await this.$signUp().setValue(`abc${emailPrefix}@gmail.com`);
            await this.$signUpButton().click();
        }   
    }

export default new Landing();