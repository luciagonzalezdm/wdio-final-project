import LoginPage from '../pages/login.page.js'
describe("Login", () => {

    it('Should deny access when invalid data is entered', async () => {
      await LoginPage.open("store");
      await super.clickElement (LoginPage.loginAccess);
      await LoginPage.logInWithSubmitButton(
        invalidAccount.username,
        invalidAccount.password
      );
      await expect(LoginPage.failedLoginMessage).toExist();
    });

      it('Should deny access when fields are empty', async () => {
        await LoginPage.open("store");
        await super.clickElement (LoginPage.loginAccess);
        await expect(LoginPage.failedLoginMessage).toExist();
      });

  
});
