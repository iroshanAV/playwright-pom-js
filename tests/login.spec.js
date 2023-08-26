const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');


test.describe("Login Page Tests", () => {

  test.beforeEach(({ page }) => {

  });



  test("TC-001: Checking whether user can logged in", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await test.step("1.Log in to the site", async () => {
      await loginPage.visit();
    });
    await test.step("2.Enter correct username and password", async () => {
        
      await loginPage.login("standard_user", "secret_sauce");
    });
    await test.step("3.Validate user logged in successfuly", async () => {
      await expect(inventoryPage.lblLoggedIn).toHaveText('Products');
    });
  });


  test("TC-002: Checking whether wrong username, password does not allow users to log in", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step("1.Log in to the site", async () => {

      await loginPage.visit();
    });
    await test.step("2.Enter correct username and password", async () => {

      await loginPage.login("standard_user", "secret");
    });
    await test.step("3.Validate Incorrect username and password message is visible", async () => {

      await expect(loginPage.lblInvalidLogin).toBeVisible({ timeout: 5000 });
    });

  });

});