package setups;

import org.openqa.selenium.WebDriver;

public class BrowserPool {
    private static WebDriver browserInstance;

    public static WebDriver getChromeInstance() {
        return BrowserPool.browserInstance;
    }

    public void setChromeInstance(WebDriver instance) {
        BrowserPool.browserInstance = instance;
    }
}
