package pages;

import helpers.Common;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import setups.BrowserPool;

import java.util.List;

public class MoodAndGenres {
    private String subContentGroup = "//*[@id=\"header\"]/ytmusic-grid-header-renderer/yt-formatted-string"; //xpath

    Common common = new Common();

    public void readSubContentGroup(){
        common.findXpathAndRead(subContentGroup,"Moods and Genres page is Opened.");
    }
}
