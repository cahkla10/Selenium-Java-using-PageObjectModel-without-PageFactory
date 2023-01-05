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

    public void clearId(String element){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(element))).clear();
    }

    public void clearXpath(String element){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(element))).clear();
    }

    public void clickId(String element){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(element))).click();
    }

    public void clickXpath(String element){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(element))).click();
    }

    public void sendKeysId(String element, String text){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(element))).sendKeys(text);
    }

    public void sendKeysXpath(String element, String text){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(element))).sendKeys(text);
    }

    public void findIdAndRead(String element, String outputText){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id(element)));
        if(list.size() >= 1){
            System.out.println(outputText);
        }
    }

    public void findXpathAndRead(String element, String outputText){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(element)));
        if(list.size() >= 1){
            System.out.println(outputText);
        }
    }

    public void findIdAndClick(String element, String text){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id(element)));
        for(WebElement aList : list){
            if(aList.getText().contains(text)){
                aList.click();
                break;
            }
        }
    }

    public void findXpathAndClick(String element, String text){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(element)));
        for(WebElement aList : list){
            if(aList.getText().contains(text)){
                aList.click();
                break;
            }
        }
    }

    public void verifyIdText(String element, String expected){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id(element)));
        if(list.size() >= 1){
            assertEquals(expected,list.get(0).getText());
        }
    }

    public void verifyXpathText(String element, String expected){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(element)));
        if(list.size() >= 1){
            assertEquals(expected,list.get(0).getText());
        }
    }
}