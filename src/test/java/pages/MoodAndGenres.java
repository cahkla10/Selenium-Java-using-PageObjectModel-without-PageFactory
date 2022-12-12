package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import setups.BrowserPool;

import java.util.List;

public class MoodAndGenres {
    private String subContentGroup = "//*[@id=\"header\"]/ytmusic-grid-header-renderer/yt-formatted-string"; //xpath

    public void readSubContentGroup(){
        List<WebElement> subContentGroups = BrowserPool.getBrowserInstance().findElements(By.xpath(subContentGroup));
        for (WebElement sCGroups : subContentGroups){
            System.out.println("Moods and Genres page is Opened.");
            System.out.println("Sub Content Groups is: " + sCGroups.getText());
        }
    }
}
