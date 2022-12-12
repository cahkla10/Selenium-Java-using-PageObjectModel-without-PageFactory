package pages;

import helpers.Common;
import org.openqa.selenium.By;
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
        BrowserPool.getBrowserInstance().findElement(By.xpath(homeLink)).click();
        common.delay(delay);
    }

    public void clickExploreLink() throws InterruptedException{
        BrowserPool.getBrowserInstance().findElement(By.xpath(exploreLink)).click();
        common.delay(delay);
    }

    public void clickLibraryLink() throws InterruptedException{
        BrowserPool.getBrowserInstance().findElement(By.xpath(libraryLink)).click();
        common.delay(delay);
    }

    public void clickSearchLogo(){
//        BrowserPool.getBrowserInstance().findElement(By.linkText(searchLink)).click();
    }

    public void seeLogo() throws InterruptedException{
        List logo = BrowserPool.getBrowserInstance().findElements(By.xpath(logoYMusic));
        if(logo.size() <= 1){
            System.out.println("Youtube Music logo already displayed.");
        }
        common.delay(delay);
    }
}
