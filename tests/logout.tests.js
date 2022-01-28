import LogoutPage from '../pages/logout.page.js'
import LoginPage from '..pages/login.page.js'

describe("Sign Up", () => {

    it('Should log out successfully when the button is pressed', async () => {
      await super.open("store");
      await super.clickElement (LoginPage.loginAccess);
      await LoginPage.logInWithSubmitButton(
        signUpAccount.username,
        signUpAccount.password
      );
      await super.clickElement(LogoutPage.logoutButton);
      await expect(LoginPage.loginAccess).toExist();
    });

});