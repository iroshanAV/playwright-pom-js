exports.InventoryPage = class InventoryPage {

  colTable1 = '//div[@class="inventory_item"]';
  
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

//This method is still under work
// async searchAnItem(itemName){
//   for(let i = 0 ; i < InventoryPageselectRandomItem() ; i++){
//     if(this.page.locator(this.colTable1[i]) === itemName ){
//       return 
//     }
//   }
// }
   
   
}