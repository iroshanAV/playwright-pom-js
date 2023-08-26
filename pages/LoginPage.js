
exports.LoginPage = class LoginPage {



  
  constructor(page){
    this.page = page;
 
    this.txtUsername = page.locator('//input[@name="user-name"]');
    this.txtPassword = page.locator('//input[@name="password"]');
    this.btnLogin = page.locator('[data-test="login-button"]');
    this.lblInvalidLogin = page.locator('[data-test="error"]');

}
   


     async login(username, password){
      await this.txtUsername.fill(username);
      await this.txtPassword.fill(password);
      await this.btnLogin.click();
     
    }


     async visit(){
      await this.page.goto("https://www.saucedemo.com/");     
    }

   
}