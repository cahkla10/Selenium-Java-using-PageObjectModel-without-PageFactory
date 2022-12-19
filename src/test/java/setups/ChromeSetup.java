package setups;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class ChromeSetup extends ChromePool{
    ChromeDriver browser;

    protected void startChrome() {
//        System.setProperty("webdriver.chrome.driver","src/test/resources/chromedriver");
        System.setProperty("webdriver.chrome.driver","D:\\OTOMESEN\\saucedemo\\src\\test\\resources\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        browser = new ChromeDriver(options);
        setChromeInstance(browser);
    }

    protected void stopChrome() {
        browser.close();
    }
}
