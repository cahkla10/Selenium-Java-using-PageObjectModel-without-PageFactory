package setups;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BrowserSetup extends BrowserPool {
    ChromeDriver chrome;

    protected void startChrome() {
//        System.setProperty("webdriver.chrome.driver","src/test/resources/chromedriver");
        System.setProperty("webdriver.chrome.driver","D:\\OTOMESEN\\saucedemo\\src\\test\\resources\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        chrome = new ChromeDriver(options);
        setChromeInstance(chrome);
    }

    protected void stopChrome() {
        chrome.close();
    }
}
