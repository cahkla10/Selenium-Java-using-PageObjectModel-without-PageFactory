$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Scenarios",
  "description": "This cases is for Login feature which is every case will started with Background first.",
  "id": "login-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 16,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user input username \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user input password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "warning message appear \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 22,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;1"
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ],
      "line": 23,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;2"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 24,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;3"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ],
      "line": 25,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;4"
    },
    {
      "cells": [
        "standarduser",
        "secretsauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 26,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2934723300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 1255064000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 92194800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 15,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user input username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user input password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "warning message appear \"Epic sadface: Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 208191300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 262897700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 80268600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 48663700,
  "status": "passed"
});
formatter.after({
  "duration": 629477800,
  "status": "passed"
});
formatter.before({
  "duration": 1902013300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 1034846300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 54882200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 15,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user input username \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user input password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "warning message appear \"Epic sadface: Password is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 157632500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 135794000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 91552300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 76060600,
  "status": "passed"
});
formatter.after({
  "duration": 657857000,
  "status": "passed"
});
formatter.before({
  "duration": 1858354900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 1297189300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 52926400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 15,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user input username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user input password \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "warning message appear \"Epic sadface: Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 214461300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 301722600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 147552800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 84112400,
  "status": "passed"
});
formatter.after({
  "duration": 621162600,
  "status": "passed"
});
formatter.before({
  "duration": 1584929800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User open the URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user type \"https://www.saucedemo.com/\" in address bar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo web will displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 11
    }
  ],
  "location": "BackgroundLoginStep.userTypeInAddressBar(String)"
});
formatter.result({
  "duration": 1257960500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 54637200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 15,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user input username \"standarduser\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user input password \"secretsauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "warning message appear \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standarduser",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 230827000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secretsauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 291940400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 145752800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 79630200,
  "status": "passed"
});
formatter.after({
  "duration": 619730600,
  "status": "passed"
});
});