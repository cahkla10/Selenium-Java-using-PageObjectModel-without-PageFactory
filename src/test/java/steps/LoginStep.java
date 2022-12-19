package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.LoginPage;
import pages.ProductsPage;

public class LoginStep {
    LoginPage loginPage = new LoginPage();
    ProductsPage productsPage = new ProductsPage();

    @Given("^user input username \"([^\"]*)\"$")
    public void userInputUsername(String username) throws Throwable {
        loginPage.clearUsernameField();
        loginPage.inputUsernameField(username);
    }

    @And("^user input password \"([^\"]*)\"$")
    public void userInputPassword(String password) throws Throwable {
        loginPage.clearPasswordField();
        loginPage.inputPasswordField(password);
    }

    @And("^user click Login button$")
    public void userClickLoginButton() throws Throwable {
        loginPage.clickLoginBtn();
    }

    @Then("^user redirected to Product page$")
    public void userRedirectedToProductPage() throws Throwable {
        productsPage.readTitlePage();
    }

    @Then("^warning message appear \"([^\"]*)\"$")
    public void warningMessageAppear(String message) throws Throwable {
        loginPage.verifyWarningMessage(message);
    }
}
