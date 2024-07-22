import gestureTaskOne from "./gestureTaskOne.js";

class Apicall extends Gestureone
{
    constructor()
    {
        super()
    }

    /**
     * Api status checkickng
     */
    async teststatus()
    {
        const response=await axios.get("https://practice-automation.com/broken-links/")
        return response;
    }
}
export default new Apicall()