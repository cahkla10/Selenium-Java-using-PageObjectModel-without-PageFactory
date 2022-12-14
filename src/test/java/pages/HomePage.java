package pages;

import helpers.Common;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import setups.BrowserPool;

import java.util.List;

public class HomePage {
    private String homeLink = "//*[@tab-id='FEmusic_home']"; //xpath
    private String exploreLink = "//*[@tab-id='FEmusic_explore']"; //xpath
    private String libraryLink = "//*[@tab-id='FEmusic_liked']"; //xpath
    private String logoYMusic = "//*[@id=\"left-content\"]/a/picture[1]/img"; //xpath
    private int delay = 1000;

    Common common = new Common();

    public void clickHomeLink() throws InterruptedException {
        common.clickXpath(homeLink);
        common.delay(delay);
    }

    public void clickExploreLink() throws InterruptedException{
        common.clickXpath(exploreLink);
        common.delay(delay);
    }

    public void clickLibraryLink() throws InterruptedException{
        common.clickXpath(libraryLink);
        common.delay(delay);
    }

    public void clickSearchLogo(){
    }

    public void seeLogo() throws InterruptedException{
        common.findXpathAndRead(logoYMusic, "Youtube Music logo already displayed.");
        common.delay(delay);
    }
}
