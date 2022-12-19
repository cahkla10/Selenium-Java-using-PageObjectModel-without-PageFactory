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
formatter.before({
  "duration": 2935657800,
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
  "duration": 696499100,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 515491400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "TC001 - User login with correct credential",
  "description": "",
  "id": "login-scenarios;tc001---user-login-with-correct-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user input username \"standard_user\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user redirected to Product page",
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
  "duration": 1107468300,
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
  "duration": 1091597000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 582539800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userRedirectedToProductPage()"
});
formatter.result({
  "duration": 523470300,
  "status": "passed"
});
formatter.after({
  "duration": 31362800,
  "status": "passed"
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
  "duration": 1032544200,
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
  "duration": 539078700,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 513571700,
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
  "duration": 1074050300,
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
  "duration": 1071099000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 552339200,
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
  "duration": 524487000,
  "status": "passed"
});
formatter.after({
  "duration": 30070000,
  "status": "passed"
});
formatter.before({
  "duration": 1041905400,
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
  "duration": 607269300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 511345100,
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
  "duration": 1093819600,
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
  "duration": 1071282700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 545610400,
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
  "duration": 527958500,
  "status": "passed"
});
formatter.after({
  "duration": 33713700,
  "status": "passed"
});
formatter.before({
  "duration": 1050276600,
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
  "duration": 456453500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 512675900,
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
  "duration": 1071411100,
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
  "duration": 1102278900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 542887800,
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
  "duration": 523834600,
  "status": "passed"
});
formatter.after({
  "duration": 28074100,
  "status": "passed"
});
formatter.before({
  "duration": 1022576300,
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
  "duration": 615689500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 512063200,
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
  "duration": 1095907800,
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
  "duration": 1092055000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 545216200,
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
  "duration": 527723400,
  "status": "passed"
});
formatter.after({
  "duration": 30702400,
  "status": "passed"
});
formatter.uri("Product.feature");
formatter.feature({
  "line": 2,
  "name": "Product Scenarios",
  "description": "This cases is for Product feature which is every case will started with Background first.",
  "id": "product-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Product"
    }
  ]
});
formatter.scenarioOutline({
  "line": 14,
  "name": "TC003 - User want to sort products",
  "description": "",
  "id": "product-scenarios;tc003---user-want-to-sort-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC003"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user click sort drop down",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user select sort \"\u003csort\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "product will be sorted \"\u003cdesc\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "product-scenarios;tc003---user-want-to-sort-products;",
  "rows": [
    {
      "cells": [
        "sort",
        "desc"
      ],
      "line": 19,
      "id": "product-scenarios;tc003---user-want-to-sort-products;;1"
    },
    {
      "cells": [
        "az",
        "A to Z"
      ],
      "line": 20,
      "id": "product-scenarios;tc003---user-want-to-sort-products;;2"
    },
    {
      "cells": [
        "za",
        "Z to A"
      ],
      "line": 21,
      "id": "product-scenarios;tc003---user-want-to-sort-products;;3"
    },
    {
      "cells": [
        "lohi",
        "Price Low to High"
      ],
      "line": 22,
      "id": "product-scenarios;tc003---user-want-to-sort-products;;4"
    },
    {
      "cells": [
        "hilo",
        "Price High to Low"
      ],
      "line": 23,
      "id": "product-scenarios;tc003---user-want-to-sort-products;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1040286400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User already login",
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
formatter.step({
  "line": 8,
  "name": "user input username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user input password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user redirected to Product page",
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
  "duration": 619170500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 512065100,
  "status": "passed"
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
  "duration": 1088308900,
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
  "duration": 1087486000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 598788300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userRedirectedToProductPage()"
});
formatter.result({
  "duration": 525590500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "TC003 - User want to sort products",
  "description": "",
  "id": "product-scenarios;tc003---user-want-to-sort-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC003"
    },
    {
      "line": 1,
      "name": "@Product"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user click sort drop down",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user select sort \"az\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "product will be sorted \"A to Z\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsStep.user_click_sort_drop_down()"
});
formatter.result({
  "duration": 543937700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "az",
      "offset": 18
    }
  ],
  "location": "ProductsStep.user_select_sort(String)"
});
formatter.result({
  "duration": 528892500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A to Z",
      "offset": 24
    }
  ],
  "location": "ProductsStep.product_will_be_sorted(String)"
});
formatter.result({
  "duration": 500249400,
  "status": "passed"
});
formatter.after({
  "duration": 31373400,
  "status": "passed"
});
formatter.before({
  "duration": 1048515600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User already login",
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
formatter.step({
  "line": 8,
  "name": "user input username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user input password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user redirected to Product page",
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
  "duration": 470138800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 511113100,
  "status": "passed"
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
  "duration": 1090886800,
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
  "duration": 1095322100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 584734100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userRedirectedToProductPage()"
});
formatter.result({
  "duration": 523047000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "TC003 - User want to sort products",
  "description": "",
  "id": "product-scenarios;tc003---user-want-to-sort-products;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC003"
    },
    {
      "line": 1,
      "name": "@Product"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user click sort drop down",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user select sort \"za\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "product will be sorted \"Z to A\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsStep.user_click_sort_drop_down()"
});
formatter.result({
  "duration": 539274400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "za",
      "offset": 18
    }
  ],
  "location": "ProductsStep.user_select_sort(String)"
});
formatter.result({
  "duration": 534789800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Z to A",
      "offset": 24
    }
  ],
  "location": "ProductsStep.product_will_be_sorted(String)"
});
formatter.result({
  "duration": 500745400,
  "status": "passed"
});
formatter.after({
  "duration": 36497700,
  "status": "passed"
});
formatter.before({
  "duration": 1034262400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User already login",
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
formatter.step({
  "line": 8,
  "name": "user input username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user input password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user redirected to Product page",
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
  "duration": 635299300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 512048800,
  "status": "passed"
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
  "duration": 1094081000,
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
  "duration": 1095862300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 595430900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userRedirectedToProductPage()"
});
formatter.result({
  "duration": 523492300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "TC003 - User want to sort products",
  "description": "",
  "id": "product-scenarios;tc003---user-want-to-sort-products;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC003"
    },
    {
      "line": 1,
      "name": "@Product"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user click sort drop down",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user select sort \"lohi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "product will be sorted \"Price Low to High\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsStep.user_click_sort_drop_down()"
});
formatter.result({
  "duration": 539946500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lohi",
      "offset": 18
    }
  ],
  "location": "ProductsStep.user_select_sort(String)"
});
formatter.result({
  "duration": 533984600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price Low to High",
      "offset": 24
    }
  ],
  "location": "ProductsStep.product_will_be_sorted(String)"
});
formatter.result({
  "duration": 499949700,
  "status": "passed"
});
formatter.after({
  "duration": 31010000,
  "status": "passed"
});
formatter.before({
  "duration": 1021395300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User already login",
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
formatter.step({
  "line": 8,
  "name": "user input username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user input password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user redirected to Product page",
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
  "duration": 606586000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundLoginStep.sauceDemoWebWillDisplayed()"
});
formatter.result({
  "duration": 539426400,
  "status": "passed"
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
  "duration": 1096526000,
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
  "duration": 1079791200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 587347900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userRedirectedToProductPage()"
});
formatter.result({
  "duration": 522885600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "TC003 - User want to sort products",
  "description": "",
  "id": "product-scenarios;tc003---user-want-to-sort-products;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC003"
    },
    {
      "line": 1,
      "name": "@Product"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user click sort drop down",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user select sort \"hilo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "product will be sorted \"Price High to Low\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsStep.user_click_sort_drop_down()"
});
formatter.result({
  "duration": 542733900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hilo",
      "offset": 18
    }
  ],
  "location": "ProductsStep.user_select_sort(String)"
});
formatter.result({
  "duration": 540611000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price High to Low",
      "offset": 24
    }
  ],
  "location": "ProductsStep.product_will_be_sorted(String)"
});
formatter.result({
  "duration": 499301900,
  "status": "passed"
});
formatter.after({
  "duration": 28896000,
  "status": "passed"
});
});