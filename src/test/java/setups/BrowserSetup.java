package setups;

import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserSetup extends BrowserPool {
    ChromeDriver browser;

    protected void startBrowser() {
        System.setProperty("webdriver.chrome.driver","src/test/resources/chromedriver");
        browser = new ChromeDriver();
        setBrowserInstance(browser);
    }

    protected void stopBrowser() {
        browser.close();
    }
}
