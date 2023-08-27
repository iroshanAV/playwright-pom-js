const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');


test.describe("Login Page Tests", () => {

  test.beforeEach(({ page }) => {

  });



  test("TC-003: Checking whether user can add items to the user cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await test.step("1.Log in to the site", async () => {
      await loginPage.visit();
    });

    await test.step("2.Enter correct username and password", async () => { 
      await loginPage.login("standard_user", "secret_sauce");
    });

    await test.step("3.Validate Add to cart button is enebled", async () => {      
      await expect(inventoryPage.lblLoggedIn).toHaveText('Products');
    });

    await test.step("4.Validate Add to Cart button got changed to Remove when clicked", async() => {
      await expect(await inventoryPage.searchAnItem("Sauce Labs Backpack")).toBeTruthy();
    })
  });



});