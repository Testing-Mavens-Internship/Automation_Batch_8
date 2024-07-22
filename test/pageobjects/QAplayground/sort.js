class Sort {
    constructor() {
        this.$$names = () => $$('//div[@class="draggable"]');
        this.$name = (index) => $(`(//div[@class="draggable"])[${index+1}]`);
        this.$dataIndex = (index) => $(`//li[@data-index="${index}"]`);
        this.$check = () => $('//button[@class="check-btn"]');
        this.$sortableList = () => $('//h3[text()="Sortable List"]');
        this.$header=()=>$('//span[text()="QA Playground"]');
        this.$sortHeader=()=>$('//h1[text()="10 Richest People"]')
    }
    /**
     * launch the url
     */

    async loadUrl() {
        await browser.url('https://qaplayground.dev/');
        await this.$sortableList().click();
        await browser.pause(3000);
    }
    /**
     * click on the check order button
     */
    async checkOrder() {
        await this.$check().click();
    }
    /**
     * Drag and drop the items into their corresponding spots
     */
    async sort() {
        let elements = await this.$$names();
        let length = elements.length;

        for (let i = 0; i < length; i++) {
            let data = await this.$dataIndex(i);

            let dataClass = await data.getAttribute('class');

            if (!dataClass.includes('wrong')) {
                console.log(`Item ${i} is already correct`);
                continue;
            }

            
            for (let j = i + 1; j < length; j++) {
                let name = await this.$name(j);
                console.log(`Dragging item ${j} to position ${i}`);
                await name.dragAndDrop(data);
                await this.checkOrder();
                dataClass = await data.getAttribute('class');

                if (dataClass.includes('right')) {
                    console.log(`Item ${i} sorted correctly`);
                    break;
                } else {
                    console.log(`Item ${i} still incorrect after dragging item ${j}`);
                }
            }
        }
    }
}

export default new Sort();
