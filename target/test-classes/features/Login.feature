@Login
  Feature: Login Scenarios
    This cases is for Login feature which is every case will started with Background first.

  Background: User open the URL
    Given user type "https://www.saucedemo.com/" in address bar
    Then Sauce Demo web will displayed

    Scenario: TC001 - User login with correct credential
      Given user input username "standard_user"
      And user input password "secret_sauce"
      And user click Login button
      Then user redirected to Product page

    @TC002
    Scenario Outline: TC002 - User login with incorrect credentials
      Given user input username "<username>"
      And user input password "<password>"
      And user click Login button
      Then warning message appear "<message>"
      Examples:
      | username      | password      | message                                                                   |
      |               |               | Epic sadface: Username is required                                        |
      | standard_user |               | Epic sadface: Password is required                                        |
      |               | secret_sauce  | Epic sadface: Username is required                                        |
      | standarduser  | secretsauce   | Epic sadface: Username and password do not match any user in this service |