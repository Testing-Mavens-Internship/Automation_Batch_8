import Common from '../qaPlaground/common.js';
import sortArray from "../../test/testData/sortList.json" assert {type: "json" }
 
export class SortableList extends Common {
    constructor() {
        super();
        this.$personNames = (index) => $(`(//p[@class="person-name"])[${index}]`);
        this.$dragPlace = (i) => $(`(//div[@class="draggable"])[${i}]`);
        this.$button = () => $(`//button[@id="check"]`);
    }
    
    /**
     * For sorting
     */
    async sorting() {
        for (let i = 0; i < sortArray.CorrectArray.length; i++) {
            let crt = sortArray.CorrectArray[i];
            console.log(`Expected name: ${crt}`);
 
            for (let j = 1; j <= sortArray.CorrectArray.length; j++) {
                let newName = await (this.$personNames(j)).getText();
                console.log(`Current name: ${newName}`);
 
                if (crt === newName) {
                    console.log(`Match found: ${newName} matches ${crt}`);
                    await (this.$personNames(j)).dragAndDrop(await this.$dragPlace(i + 1)); 
                    break;
                }
            }
        }
        console.log("Sorting completed.");
    }
}
 
export default new SortableList();