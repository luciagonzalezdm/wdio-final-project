import BasePage from "./base.page";

class LoginPage extends BasePage {
    
    get usernameInput () { 
        return $('[id="email"]'); 
    }
    
    get passwordInput () {
        return $('[id="passwd"]'); 
    }

    get SignInButton () { 
        return $('[class="button btn btn-default button-medium"]'); 
    }

    get failedLoginMessage () {
        return $('[class= "badge badge-pill badge-danger"]'); 
    }

    get loginAccess () {
        return $('[class="button btn btn-login"]'); 
    }
    

    async navigateToPage(){
        await super.open();
    }
    
    async completeCredentials(username, password) {
        await super.completeFiels(await this.usernameInput, username);
        await super.completeFields(await this.passwordInput, password);
      }

    async logInWithSubmitButton(username, password){
        this.completeCredentials(username, password);
        await super.clickElement(this.SignInButton);
    }

}
export default new LoginPage();