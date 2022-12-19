package pages;

import helpers.Common;

public class LoginPage {
    private String logoImg = "//*[@class=\"login_logo\"]";
    private String usernameField = "user-name";
    private String passwordField = "password";
    private String loginBtn = "login-button";
    private String botImg = "//*[@class=\"bot_column\"]";
    private String errorMessage = "//*[@data-test=\"error\"]";
    private int delay = 500;

    Common common = new Common();

    public void seeLogoImg() throws InterruptedException {
        common.delay(delay);
        common.findXpathAndRead(logoImg, "Logo image is displayed!");
    }

    public void seeBotImg() throws InterruptedException{
        common.delay(delay);
        common.findXpathAndRead(botImg, "Bot image is displayed!");
    }

    public void clearUsernameField() throws InterruptedException{
        common.delay(delay);
        common.clearId(usernameField);
    }

    public void inputUsernameField(String username) throws InterruptedException{
        common.delay(delay);
        common.sendKeysId(usernameField, username);
    }

    public void clearPasswordField() throws InterruptedException{
        common.delay(delay);
        common.clearId(passwordField);
    }

    public void inputPasswordField(String password) throws InterruptedException{
        common.delay(delay);
        common.sendKeysId(passwordField, password);
    }

    public void clickLoginBtn() throws InterruptedException{
        common.delay(delay);
        common.clickId(loginBtn);
    }

    public void verifyWarningMessage(String message) throws InterruptedException{
        common.delay(delay);
        common.verifyXpathText(errorMessage, message);
    }
}
