import Common from "./commonPage.js";
import productDetailsObj from "./productDetailsPage.js";

class ProductCompare extends Common {
    constructor() {
        super();
        this.$productCompareHeader = () => $(`//span[text()="Compare Products"]`);
        this.$productNameInCompareList = (index) => $(`(//td/strong[@class="product-item-name"])[${index}]`);
        this.$skuIdInCompareList = (index) => $(`(//td[@class="cell product attribute"]/div[@class="attribute value"])[${index}]`);
        this.$productDetailsInCompareList = (index) => $(`(//span[normalize-space()="Description"]/ancestor::tr//div[@class="attribute value"]/p)[${index}]`);
        this.$$productcountInCompareList = () => $$(`//td[@data-th="Product"]`);
        this.productDetailsArrayInCompareList = [];
        this.productDetailsObjectInCompareList = {};
    }

    /**
     * Method to store product details as objects in array.
     */
    async storeProductDetails() {
        const productCount = await this.$$productcountInCompareList().length;

        for (let i = 1; i <= productCount; i++) {
            const getProductName = await this.$productNameInCompareList(i).getText();
            const getSkuId = await this.$skuIdInCompareList(i).getText();
            let getProductDesc;
            let getProductChars;

            if (await this.$productDetailsInCompareList(i).isDisplayed()) {
                getProductDesc = await this.$productDetailsInCompareList(i).getText();
            } else {
                getProductDesc = "";
            }

            if (await this.$productDetailsInCompareList(i + 1).isDisplayed()) {
                getProductChars = await this.$productDetailsInCompareList(i + 1).getText();
            } else {
                getProductChars = "";
            }

            const productDetailsObjectInCompareList = {
                productName: getProductName,
                productSkuId: getSkuId,
                productDesc: getProductDesc,
                productChars: getProductChars
            };

            this.productDetailsArrayInCompareList.push(productDetailsObjectInCompareList);
            console.log("Array in compare /////=> ", this.productDetailsArrayInCompareList);
        }
    }
    
    async compareArrayOfObjects(first_array_of_objects,
        second_array_of_objects){
            return (
                first_array_of_objects.length === second_array_of_objects.length &&
                first_array_of_objects.every((element_1) =>
                    second_array_of_objects.some(
                        (element_2) =>
                            element_1.productName === element_2.productName &&
                            element_1.productSkuId === element_2.productSkuId &&
                            element_1.productDesc === element_2.productDesc &&
                            element_1.productChars === element_2.productChars
                    )
                )
            );
        }
}

export default new ProductCompare();
