package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import helpers.Common;
import pages.ExplorePage;
import pages.HomePage;
import pages.MoodAndGenres;

public class SearchStep {
    HomePage homePage = new HomePage();
    ExplorePage explorePage = new ExplorePage();
    Common common = new Common();
    MoodAndGenres moodAndGenres = new MoodAndGenres();

    @Given("^I open browser$")
    public void iOpenBrowser() throws Throwable {

    }

    @Given("^I go to youtube music page$")
    public void iGoToYoutubeMusicPage() throws Throwable {

    }

    @Then("^I should be in youtube music page$")
    public void iShouldBeInYoutubeMusicPage() throws Throwable {
        homePage.seeLogo();
    }

    @Then("^I click explore menu$")
    public void iClickExploreMenu() throws Throwable {
        homePage.clickExploreLink();
    }

    @Then("^The explore page is opened$")
    public void theExplorePageIsOpened() throws Throwable {
        explorePage.readOneOfContentGroup();
    }

    @Then("^I open \"([^\"]*)\" Content Group$")
    public void iOpen(String contentGroupName) throws Throwable {
        explorePage.clickContentGroup(contentGroupName);
        moodAndGenres.readSubContentGroup();
    }
}
