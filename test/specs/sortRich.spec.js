// import sortRich from "../pageobjects/qaPlayground/sortRich.js";
// import richArray from "../testData/richSort.json" assert { type: 'json' };



//     it('dragAndDrop', async () => {
//         const personElements = await sortRich.$persons();

//         for (let i = 0; i < richArray.people.length; i++) {
//             const personName = richArray.people[i];
//             for (let j = 0; j < personElements.length; j++) {
//                 const personElement = await personElements[j].getText();
//                 if (personElement === personName && i !== j) {
//                     await sortRich.dragAndDrop(j, i);
//                     break;
//                 }
//             }
//         }

//         await sortRich.clickConfirm();
//     });
   
import sortRich from "../pageobjects/qaPlayground/sortRich.js";

describe('emoji slider',()=>{
    it('load url',async()=>{
        await sortRich.loadUrl()
 
    })
    it('click check order',async()=>{
        await sortRich.checkOrder()
    })
    it('sorting',async()=>{
        await sortRich.sort();
    })
})
