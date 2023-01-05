package setups;

import gherkin.lexer.Ca;
import helpers.GlobalVariables;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class BrowserSetup {

    public static WebDriver getWebDriver(){
        return Capabilities.webDriver;
    }

    public static void startWebDriver() {
        Capabilities capabilities = new Capabilities();

        switch (GlobalVariables.BROWSER.toLowerCase()){
            case "chrome":
                capabilities.ChromeDriver();
                break;
            case "edge":
                capabilities.EdgeDriver();
                break;
            case "firefox":
                capabilities.FirefoxDriver();
                break;
        }
    }
}