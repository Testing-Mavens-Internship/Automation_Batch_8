import CommonPage from "./common.js";

class Ticket extends CommonPage{
    constructor(){
        super();
        this.$validateCruiseName=()=>$(`//small[text()="Holland America Line / KONINGSDAM"]`);
        this.$validateDuration=()=>$(`//small[text()="7 Nights"]`);
        this.$clickBookNow=()=>$(`(//a[@class="booknow ng-tns-c40-0"])[2]`);
        this.$loader=()=>$(`//button[@id="closeWaiting"]`);
        this.$notification=()=>$(`//div[contains(@class,"toast-message")]`);
        this.$bookNow=()=>$(`//button[@class="btn book-now ng-tns-c47-4"]`);
    }

    /**
     * To validate cruise name and duration
     * @param {string} cruise 
     * @param {string} nights 
     */
    async validateCruise(cruise,nights){
        const cruiseNameText = await this.$validateCruiseName().getText();
        const durationText = await this.$validateDuration().getText();
        expect(cruiseNameText).toBe(cruise);
        expect(durationText).toBe(nights);

    }

    /**
     * To click BookNow option
     */
    async clickBookNow(){
        await this.$clickBookNow().click();
    }

    /**
     * To validate notification
     */
    async validateNotification(expectedMessage){
        let notification = await this.$notification().getText();
        expect(notification)
            .withContext('Alert message text does not match')
            .toBe(expectedMessage);

    }

    /**
     * To click BookNow option
     */
    async clickBookNowFinal(){
        await this.$bookNow().waitForClickable({timeout: 10000});
        await this.$bookNow().click();
    }
}
export default new Ticket();