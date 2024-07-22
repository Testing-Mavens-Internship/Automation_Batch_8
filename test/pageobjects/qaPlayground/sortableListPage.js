// import tests from "../../data/names.json" assert {type:'json'}

// export class SortableListPage{
//     constructor(){
//         this.$index=(pos)=>$(`//li[@data-index="${pos}"]`)
//         this.$$allperson=()=>$$('(//p[@class="person-name"])')
//         this.$person=(name)=>$(`(//p[@class="person-name"])[${name}]`)
//         this.$button=()=>$('//button[@id="check"]')
//         this.$name=(nm)=>$(`//p[text()="${nm}"]`)
        
//     }
//     /**
//      * To launch the url of the website
//      */
//     async loadUrl(){
//         await browser.maximizeWindow();
//         await browser.url("https://qaplayground.dev/apps/sortable-list/");

//     }

//     async sortNames(){
//         for(let i=0;i<await this.$$allperson().length;i++)
//             {
//             const personName=await this.$name(tests.Name[i])
//             const position=await this.$index(i)
//             personName.dragAndDrop(position,{duration:5000})
           
//             }
//             await this.$button().click()
//             await browser.pause(5000)
//     }
// }
// export default new SortableListPage();

export class SortableList {
    constructor() {
        super();
        this.$personNames = (index) => $(`(//p[@class="person-name"])[${index}]`);
        this.$dragPlace = (i) => $(`(//div[@class="draggable"])[${i}]`);
        this.$button = () => $(`//button[@id="check"]`);
    }
 
    async sorting() {
        for (let i = 0; i < sortArray.CorrectArray.length; i++) {
            let crt = sortArray.CorrectArray[i];
            console.log(`Expected name: ${crt}`);
 
            for (let j = 1; j <= sortArray.CorrectArray.length; j++) {
                let newName = await (this.$personNames(j)).getText();
                console.log(`Current name: ${newName}`);
 
                if (crt === newName) {
                    console.log(`Match found: ${newName} matches ${crt}`);
                    await (this.$personNames(j)).dragAndDrop(await this.$dragPlace(i + 1)); // Assuming drag place indexes start from 1
                    break;
                }
            }
        }
        console.log("Sorting completed.");
    }
}
 
export default new SortableList();