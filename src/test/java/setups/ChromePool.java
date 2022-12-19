package setups;

import org.openqa.selenium.WebDriver;

public class ChromePool {
    private static WebDriver browserInstance;

    public static WebDriver getChromeInstance() {
        return ChromePool.browserInstance;
    }

    public void setChromeInstance(WebDriver instance) {
        ChromePool.browserInstance = instance;
    }
}
