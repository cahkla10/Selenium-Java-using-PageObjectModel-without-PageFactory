package helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import setups.ChromePool;

import java.util.List;

public class Common {
    public void delay(int delay) throws InterruptedException {
        Thread.sleep(delay);
    }

    public void openUrl(String url){
        ChromePool.getChromeInstance().navigate().to(url);
    }

    public void clearId(String element){
        ChromePool.getChromeInstance().findElement(By.id(element)).clear();
    }

    public void clearXpath(String element){
        ChromePool.getChromeInstance().findElement(By.xpath(element)).clear();
    }

    public void clickId(String element){
        ChromePool.getChromeInstance().findElement(By.id(element)).click();
    }

    public void clickXpath(String element){
        ChromePool.getChromeInstance().findElement(By.xpath(element)).click();
    }

    public void sendKeysId(String element, String text){
        ChromePool.getChromeInstance().findElement(By.id(element)).sendKeys(text);
    }

    public void sendKeysXpath(String element, String text){
        ChromePool.getChromeInstance().findElement(By.xpath(element)).sendKeys(text);
    }

    public void findIdAndRead(String element, String outputText){
        List<WebElement> list = ChromePool.getChromeInstance().findElements(By.id(element));
        if(list.size() >= 1){
            System.out.println(outputText);
        }
    }

    public void findXpathAndRead(String element, String outputText){
        List<WebElement> list = ChromePool.getChromeInstance().findElements(By.xpath(element));
        if(list.size() >= 1){
            System.out.println(outputText);
        }
    }

    public void findIdAndClick(String element, String text){
        List<WebElement> list = ChromePool.getChromeInstance().findElements(By.id(element));
        for(WebElement aList : list){
            if(aList.getText().contains(text)){
                aList.click();
                break;
            }
        }
    }

    public void findXpathAndClick(String element, String text){
        List<WebElement> list = ChromePool.getChromeInstance().findElements(By.xpath(element));
        for(WebElement aList : list){
            if(aList.getText().contains(text)){
                aList.click();
                break;
            }
        }
    }

    public void verifyXpathText(String element, String expected){
        List<WebElement> list = ChromePool.getChromeInstance().findElements(By.xpath(element));
        if(list.size() >= 1){
            System.out.println("Expected: " + expected);
            System.out.println("Result: " + list.get(0).getText());
        }
    }
}
