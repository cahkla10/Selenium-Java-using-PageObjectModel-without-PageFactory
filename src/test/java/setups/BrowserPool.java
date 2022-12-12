package setups;

import org.openqa.selenium.WebDriver;

public class BrowserPool {
    private static WebDriver browserInstance;

    public static WebDriver getBrowserInstance() {
        return BrowserPool.browserInstance;
    }

    public void setBrowserInstance(WebDriver instance) {
        BrowserPool.browserInstance = instance;
    }
}
