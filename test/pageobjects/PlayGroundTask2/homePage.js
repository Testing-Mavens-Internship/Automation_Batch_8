import CommonPage from "./commonPage.js";

class HomePage extends CommonPage{

    constructor()
    {
        super()
    }

    async loggedInValidation()
    {
        await this.$dropdown().click()
    }

    async clickComponents()
    {
        await this.$components().click()
    }
}

export default new HomePage()
