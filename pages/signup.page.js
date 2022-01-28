import BasePage from "./base.page";

class SignUpPage extends BasePage {

    get signUpAccess () { 
        return $('[id="signin2"]'); 
    }

    get usernameInput () { 
        return $('[id="sign-username"]'); 
    } 

    get passwordInput () { 
        return $('[id="sign-password"]'); 
    } 

    get signUpButton () { 
        return $('[class="btn btn-primary"]'); 
    } 

    get signUpHeader () { 
        return $('[class="modal-header"]'); 
    } 
    

    async signUpWithButton(username, password){
        this.completeCredentials(username, password);
        await super.clickElement(this.SignUpButton);
    }
}
export default new SignUpPage();