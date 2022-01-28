class LogoutPage extends BasePage {

    get logoutButton () { 
        return $('[id="logout2"]'); 
    }
    
}
    export default new LogoutPage();