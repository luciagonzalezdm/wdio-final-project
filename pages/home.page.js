import BasePage from "./base.page";

class HomePage extends BasePage {

    get welcomeMessage() { 
        return $('[id="nameofuser"]'); 
    }
}
export default new HomePage();