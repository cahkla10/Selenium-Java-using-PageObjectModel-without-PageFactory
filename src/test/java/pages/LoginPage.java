package pages;

import helpers.Common;

public class LoginPage {
    private String logoImg = "//*[@class=\"login_logo\"]";
    private String usernameField = "user-name";
    private String passwordField = "password";
    private String loginBtn = "login-button";
    private String botImg = "//*[@class=\"bot_column\"]";
    private String errorMessage = "//*[@data-test=\"error\"]";

    Common common = new Common();

    public void seeLogoImg() {
        common.findXpathAndRead(logoImg, "Logo image is displayed!");
    }

    public void seeBotImg() {
        common.findXpathAndRead(botImg, "Bot image is displayed!");
    }

    public void clearUsernameField() {
        common.clearId(usernameField);
    }

    public void inputUsernameField(String username) {
        common.sendKeysId(usernameField, username);
    }

    public void clearPasswordField() {
        common.clearId(passwordField);
    }

    public void inputPasswordField(String password) {
        common.sendKeysId(passwordField, password);
    }

    public void clickLoginBtn() {
        common.clickId(loginBtn);
    }

    public void verifyWarningMessage(String message) {
        common.verifyXpathText(errorMessage, message);
    }
}