import Common from "./common.js";

class SortWithoutArray extends Common {
    constructor() {
        super();
        this.$$personNames = () => $$(`//li[contains(@class,"wrong")]`);
        this.$personName = (index) => $(`(//li[contains(@class,"wrong")])[${index}]`);
        this.$button = () => $(`//button[@id="check"]`);
        this.$$listElm = () => $$('li[data-index]');
    }

    async sortingWithoutArray() {
        for await (const [index, $elm] of (await this.$$listElm()).entries()) {
            await this.$button().click();
            await $elm.scrollIntoView({ block: "end", inline: 'end' });
            if (await $elm.getAttribute('class') == 'right') continue;
            for (let i = index + 1; i < await this.$$listElm().length; i++) {
                if (await this.$$listElm()[i].getAttribute('class') != 'right') {
                    await this.$$listElm()[i].dragAndDrop(await $elm, { duration: 1000 });
                    await this.$button().scrollIntoView({ block: "end", inline: 'end' });
                    await this.$button().click();
                    await $elm.scrollIntoView({ block: "end", inline: 'end' });
                    if (await $elm.getAttribute('class') == 'right') break;
                }
            }
        }
    }
}

export default new SortWithoutArray();
