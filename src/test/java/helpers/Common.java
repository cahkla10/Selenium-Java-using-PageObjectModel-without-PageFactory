package helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import setups.BrowserSetup;

import java.time.Duration;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class Common {
    WebDriverWait wait = new WebDriverWait(BrowserSetup.getWebDriver(), Duration.ofSeconds(GlobalVariables.TIMEOUT));

    public void openUrl(String url){
        BrowserSetup.getWebDriver().navigate().to(url);
    }

    public void clear(By element){
        wait.until(ExpectedConditions.visibilityOfElementLocated(element)).clear();
    }

    public void click(By element){
        wait.until(ExpectedConditions.visibilityOfElementLocated(element)).click();
    }

    public void sendKeys(By element, String text){
        wait.until(ExpectedConditions.visibilityOfElementLocated(element)).sendKeys(text);
    }

    public void findAndRead(By element, String outputText){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(element));
        if(list.size() >= 1){
            System.out.println(outputText);
        }
    }

    public void findAndClick(By element, String text){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(element));
        for(WebElement aList : list){
            if(aList.getText().contains(text)){
                aList.click();
                break;
            }
        }
    }

    public void verifyText(By element, String expected){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(element));
        if(list.size() >= 1){
            assertEquals(expected,list.get(0).getText());
        }
    }
}
