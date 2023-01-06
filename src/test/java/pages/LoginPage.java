package pages;

import helpers.Common;
import org.openqa.selenium.By;

public class LoginPage {
    private By logoImg = By.xpath("//*[@class='login_logo']");
    private By usernameField = By.id("user-name");
    private By passwordField = By.id("password");
    private By loginBtn = By.id("login-button");
    private By botImg = By.xpath("//*[@class='bot_column']");
    private By errorMessage = By.xpath("//*[@data-test='error']");

    Common common = new Common();

    public void seeLogoImg() {
        common.findAndRead(logoImg, "Logo image is displayed!");
    }

    public void seeBotImg() {
        common.findAndRead(botImg, "Bot image is displayed!");
    }

    public void clearUsernameField() {
        common.clear(usernameField);
    }

    public void inputUsernameField(String username) {
        common.sendKeys(usernameField, username);
    }

    public void clearPasswordField() {
        common.clear(passwordField);
    }

    public void inputPasswordField(String password) {
        common.sendKeys(passwordField, password);
    }

    public void clickLoginBtn() {
        common.click(loginBtn);
    }

    public void verifyWarningMessage(String message) {
        common.verifyText(errorMessage, message);
    }
}
