package pages;

import helpers.Common;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import setups.BrowserPool;

import java.util.List;

public class ExplorePage {
    private String contentGroup = "//*[@id=\"details\"]/yt-formatted-string/a"; //xpath
    private int delay = 1000;

    Common common = new Common();

    public void clickContentGroup(String contentGroupName) throws InterruptedException {
        common.findXpathAndClick(contentGroup, contentGroupName);
        common.delay(delay);
    }

    public void readOneOfContentGroup() throws InterruptedException{
        common.findXpathAndRead(contentGroup,"Explore Page is opened.");
        common.delay(delay);
    }
}
