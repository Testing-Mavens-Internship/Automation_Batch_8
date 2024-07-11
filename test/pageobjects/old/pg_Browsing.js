import common from "./pg_commonpage.js";
class Browse extends common
{
constructor()
{
super();
this.$shoptxt=()=>$('//a[text()="Shop"]');
}
async shopsclk()
{

}
}
export default new Browse();