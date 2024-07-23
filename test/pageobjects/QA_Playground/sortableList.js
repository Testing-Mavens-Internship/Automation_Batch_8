import Common from "./common.js";
import crtArray from "../../testData/nameList.json" assert { type: "json" };

class SortableList extends Common {
    constructor() {
        super();
        this.$personNames = (index) => $(`(//p[@class="person-name"])[${index}]`);
        this.$dragPlace = (i) => $(`(//div[@class="draggable"])[${i}]`);
        this.$button = () => $(`//button[@id="check"]`);
        this.$header = () => $(`//a[@class="item logo"]`);
    }

    async sorting() {
        for (let i = 0; i < crtArray.CorrectArray.length; i++) {
            let crt = crtArray.CorrectArray[i];
            console.log(`Expected name: ${crt}`);

            for (let j = 1; j <= crtArray.CorrectArray.length; j++) {
                let newName = await (this.$personNames(j)).getText();
                console.log(`Current name: ${newName}`);

                if (crt === newName) {
                    console.log(`Match found: ${newName} matches ${crt}`);
                    await (this.$personNames(j)).dragAndDrop(await this.$dragPlace(i + 1));
                }
            }
        }
        console.log("Sorting completed.");
    }
}

export default new SortableList();
