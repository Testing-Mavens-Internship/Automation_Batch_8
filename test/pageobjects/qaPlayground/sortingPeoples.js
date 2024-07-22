import Common from "./commonPage.js";
import sortedArray from "../../dataSets/nameList.json" assert { type: "json" };

class Sortingpeople extends Common {
    constructor() {
        super();
        this.$positionToDrag = (index) => $(`(//div[@class="draggable"])[${index}]`);
        this.$personNames = (index) => $(`(//p[@class="person-name"])[${index}]`);
        this.$button = () => $(`//button[@id="check"]`);
    }

    async sorting() {
        for (let i = 0; i < sortedArray.ActualSortedArray.length; i++) {
            let element = sortedArray.ActualSortedArray[i];

            for (let j = 1; j <= sortedArray.ActualSortedArray.length; j++) {
                let newName = await (this.$personNames(j)).getText();

                if (element === newName) {
                    console.log(`Match found: ${newName} matches ${element}`);
                    await (this.$personNames(j)).dragAndDrop(await this.$positionToDrag(i + 1)); 
                    break;
                }
            }
        }
    }
}

export default new Sortingpeople();