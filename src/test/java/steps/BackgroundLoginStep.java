package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import helpers.Common;
import pages.LoginPage;

public class BackgroundLoginStep {
    Common common = new Common();
    LoginPage loginPage = new LoginPage();

    @Given("^user type \"([^\"]*)\" in address bar$")
    public void userTypeInAddressBar(String url) throws Throwable {
        common.openUrl(url);
    }

    @Then("^Sauce Demo web will displayed$")
    public void sauceDemoWebWillDisplayed() throws Throwable {
        loginPage.seeLogoImg();
    }
}