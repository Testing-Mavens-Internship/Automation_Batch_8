import CommonPage from "./commonPage.js";

export class TableComponentPage extends CommonPage{
        constructor(){
            super();
            this.$nameHeader=()=>$(`//th[text()="Name"]`);
        }
}