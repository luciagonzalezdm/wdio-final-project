import SignUpPage from '../pages/signup.page.js'
import LoginPage from '..pages/login.page.js'
import HomePage from '../pages/home.page.js'
describe("Sign Up", () => {

    it('Should sign up successfully when username and password is entered and the button is pressed', async () => {
      await super.open("store");
      await super.clickElement (SignUpPage.signUpAccess);
      await SignUpPage.signUpWithButton(
        signUpAccount.username,
        signUpAccount.password
      );
      await super.clickElement (LoginPage.loginAccess);
      await LoginPage.logInWithSubmitButton(
        signUpAccount.username,
        signUpAccount.password
      );
      await expect(HomePage.welcomeMessage).toExist();
    });


      it('Should show an error message when tries sign up with registered account', async () => {
        await super.open("store");
        await super.clickElement (SignUpPage.signUpAccess);
        await SignUpPage.signUpWithButton(
          signUpAccount.username,
          signUpAccount.password
        );
       
        await SignUpPage.signUpHeader.waitForDisplayed();
        expect (await browser.checkElement(await SignUpPage.signUpHeader, "signUp-headerContainer", {}),
        "Error: the page not equal to original. Found message: This user already exist." ).equal(0);

      });
  
});
