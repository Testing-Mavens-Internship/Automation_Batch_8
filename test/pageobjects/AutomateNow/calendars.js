import CommonPage from "./commonPage.js";

class Calendars extends CommonPage {

    constructor()
    {
        super()
        this.$calendarsOption=()=> $('//a[@href="https://practice-automation.com/calendars/"]')
        this.$calendarHeader=()=> $('//h1[@itemprop="headline"]')
        this.$inputField=()=> $('//input[@id="g1065-selectorenteradate"]')
        this.$submitBtn=()=> $('(//button[text()="Submit"])[1]')
        this.$dateSelected=()=> $('//div[@class="field-value"]')
    }

    async clickCalendarOption()
    {
        await this.$calendarsOption().click()
    }

    async selectDate(date)
    {
        await this.$inputField().waitForDisplayed({ timeout: 5000 })
        await this.$inputField().click()

        const [year, month, day] = date.split('-');
        const targetDate = new Date(year, month - 1, day);

        async function getDisplayedMonthYear() 
        {
            const monthText = await browser.$('//span[@class="ui-datepicker-month"]').getText();
            const yearText = await browser.$('//span[@class="ui-datepicker-year"]').getText();
            return new Date(`${monthText} 1, ${yearText}`);
        }
        
        while (true) 
        {
            const displayedDate = await getDisplayedMonthYear();
            if (displayedDate.getFullYear() === targetDate.getFullYear() && displayedDate.getMonth() === targetDate.getMonth()) {
                break;
            }
    
            if (displayedDate > targetDate) {
                const prevButton = await browser.$('//a[@title="Previous"]');
                await prevButton.click();
            } else {
                const nextButton = await browser.$('//a[@title="Next"]');
                await nextButton.click();
            }
        }

        const daySelector = await browser.$(`//td[normalize-space()='${parseInt(day, 10)}']`);
        await daySelector.click();
        await browser.pause(2000)

        await this.$submitBtn().waitForDisplayed({ timeout: 5000 })
        await this.$submitBtn().click()
    }

}

export default new Calendars()
