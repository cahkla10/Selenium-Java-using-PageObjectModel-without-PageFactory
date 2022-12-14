package helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import setups.BrowserPool;

import java.util.List;

public class Common {

    public void delay(int delay) throws InterruptedException {
        Thread.sleep(delay);
    }

    public void clickId(String element){
        BrowserPool.getBrowserInstance().findElement(By.id(element)).click();
    }

    public void clickXpath(String element){
        BrowserPool.getBrowserInstance().findElement(By.xpath(element)).click();
    }

    public void sendKeysId(String element, String text){
        BrowserPool.getBrowserInstance().findElement(By.id(element)).sendKeys(text);
    }

    public void sendKeysXpath(String element, String text){
        BrowserPool.getBrowserInstance().findElement(By.xpath(element)).sendKeys(text);
    }

    public void findIdAndRead(String element, String outputText){
        List<WebElement> list = BrowserPool.getBrowserInstance().findElements(By.id(element));
        if(list.size() >= 1){
            System.out.println(outputText);
        }
    }

    public void findXpathAndRead(String element, String outputText){
        List<WebElement> list = BrowserPool.getBrowserInstance().findElements(By.xpath(element));
        if(list.size() >= 1){
            System.out.println(outputText);
        }
    }

    public void findIdAndClick(String element, String text){
        List<WebElement> list = BrowserPool.getBrowserInstance().findElements(By.id(element));
        for(WebElement aList : list){
            if(aList.getText().contains(text)){
                aList.click();
                break;
            }
        }
    }

    public void findXpathAndClick(String element, String text){
        List<WebElement> list = BrowserPool.getBrowserInstance().findElements(By.xpath(element));
        for(WebElement aList : list){
            if(aList.getText().contains(text)){
                aList.click();
                break;
            }
        }
    }
}
