exports.InventoryPage = class InventoryPage {

  colTable1 = '//div[@class="inventory_item"]';
  itemNameCol = '(//div[@class="inventory_item_name"])';
  btnAddtoCart = '/../../../div[2]/button'
  
  constructor(page){
    this.page = page;

    this.lblLoggedIn = page.getByText('Products')
    this.colTable = page.locator('//div[@class="inventory_item"]');
    this.fullTable = page.locator('.inventory_container');
}

async selectRandomItem(){
  await this.fullTable.waitFor({state: "visible"})
  const itemCount =  await (this.colTable).count();
  return  itemCount;
}


async searchAnItem(itemName){

  await this.fullTable.waitFor({state: "visible"})
  const itemCount =  await (this.colTable).count();

  for(let i = 1 ; i < itemCount+1 ; i++){
    if((await this.page.locator(this.itemNameCol+"["+i+"]").innerText()).valueOf() === itemName ){
      console.log("This is the item "+ (await this.page.locator(this.itemNameCol+"["+i+"]").innerText()).valueOf())
      await this.page.locator(this.itemNameCol+"["+i+"]"+this.btnAddtoCart).click()

      if(  (await this.page.locator(this.itemNameCol+"["+i+"]"+this.btnAddtoCart).innerText()).valueOf() == "Remove"){
        return true
      }
      
    }
  }
}
   
   
}