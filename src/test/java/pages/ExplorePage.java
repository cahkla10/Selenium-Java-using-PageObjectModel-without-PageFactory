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
        List<WebElement> contentGroups = BrowserPool.getBrowserInstance().findElements(By.xpath(contentGroup));
        System.out.println("Clicked Content Group is " + contentGroupName);
        for(WebElement contentGroupIdx : contentGroups){
            if(contentGroupIdx.getText().contains(contentGroupName)){
                contentGroupIdx.click();
                System.out.println(contentGroupIdx.getText() + "Clicked!");
                break;
            }
        }
        common.delay(delay);
    }

    public void readOneOfContentGroup() throws InterruptedException{
        List<WebElement> contentGroups = BrowserPool.getBrowserInstance().findElements(By.xpath(contentGroup));
        System.out.println("Explore Page is opened.");
        for(WebElement cGroups : contentGroups){
            System.out.println("Cek Content Group is: " + cGroups.getText());
        }
        common.delay(delay);
    }
}
