$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SeleniumProjects/InterviewCucumber/FeatureFiles/BackgroundDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Checking Background Verification",
  "description": "",
  "id": "checking-background-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Validation Multiple Details with Purchase Flight",
  "description": "",
  "id": "checking-background-verification;validation-multiple-details-with-purchase-flight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Special"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select source_city from dropdown and destiny_city from dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on FindFlights button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I Validate Navigation to Purchase Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Enter username as \"\u003cusername\u003e\" and  Address as \"\u003cAddress\u003e\" and City as \"\u003cCity\u003e\" and State as \"\u003cState\u003e\" and Zipcode as \"\u003cZipcode\u003e\" and CardTyep as \"\u003cCardType\u003e\" and CCNumber as \"\u003cCCNumber\u003e\" and Month as \"\u003cMonth\u003e\" and Year as \"\u003cYear\u003e\" and NameofCard as \"\u003cNameofCard\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I will get Id of the flight and store it into txt file",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "checking-background-verification;validation-multiple-details-with-purchase-flight;",
  "rows": [
    {
      "cells": [
        "username",
        "Address",
        "City",
        "State",
        "Zipcode",
        "CardType",
        "CCNumber",
        "Month",
        "Year",
        "NameofCard"
      ],
      "line": 25,
      "id": "checking-background-verification;validation-multiple-details-with-purchase-flight;;1"
    },
    {
      "cells": [
        "SunkaraRam",
        "Dmm",
        "ATP",
        "AP",
        "1234",
        "Visa",
        "78922",
        "3",
        "2021",
        "Ram S"
      ],
      "line": 26,
      "id": "checking-background-verification;validation-multiple-details-with-purchase-flight;;2"
    },
    {
      "cells": [
        "Lavanya",
        "Dmm",
        "ATP",
        "AP",
        "1445",
        "Visa",
        "89657",
        "5",
        "2022",
        "Lav S"
      ],
      "line": 27,
      "id": "checking-background-verification;validation-multiple-details-with-purchase-flight;;3"
    },
    {
      "cells": [
        "Deepthi",
        "Dmm",
        "ATP",
        "AP",
        "15545",
        "Visa",
        "12356",
        "6",
        "2021",
        "Deepthi S"
      ],
      "line": 28,
      "id": "checking-background-verification;validation-multiple-details-with-purchase-flight;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17309094218,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validation Multiple Details with Purchase Flight",
  "description": "",
  "id": "checking-background-verification;validation-multiple-details-with-purchase-flight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Special"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select source_city from dropdown and destiny_city from dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on FindFlights button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I Validate Navigation to Purchase Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Enter username as \"SunkaraRam\" and  Address as \"Dmm\" and City as \"ATP\" and State as \"AP\" and Zipcode as \"1234\" and CardTyep as \"Visa\" and CCNumber as \"78922\" and Month as \"3\" and Year as \"2021\" and NameofCard as \"Ram S\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I will get Id of the flight and store it into txt file",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefMethods.i_select_source_city_from_dropdown_and_destiny_city_from_dropdown()"
});
formatter.result({
  "duration": 3838092379,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_click_on_FindFlights_button()"
});
formatter.result({
  "duration": 29815,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_Validate_Navigation_to_Purchase_Page()"
});
formatter.result({
  "duration": 13081699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SunkaraRam",
      "offset": 21
    },
    {
      "val": "Dmm",
      "offset": 50
    },
    {
      "val": "ATP",
      "offset": 68
    },
    {
      "val": "AP",
      "offset": 87
    },
    {
      "val": "1234",
      "offset": 107
    },
    {
      "val": "Visa",
      "offset": 130
    },
    {
      "val": "78922",
      "offset": 153
    },
    {
      "val": "3",
      "offset": 174
    },
    {
      "val": "2021",
      "offset": 190
    },
    {
      "val": "Ram S",
      "offset": 215
    }
  ],
  "location": "StepDefMethods.i_Enter_username_as_and_Address_as_and_City_as_and_State_as_and_Zipcode_as_and_CardTyep_as_and_CCNumber_as_and_Month_as_and_Year_as_and_NameofCard_as(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3443549701,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_will_get_Id_of_the_flight_and_store_it_into_txt_file()"
});
formatter.result({
  "duration": 2064741766,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[contains(text(),\u00271604\u0027)]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027RAMSUNKARA\u0027, ip: \u0027192.168.43.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\SUNKAR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53200}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 683ef6b0acb005705fb06c3592e7f7c0\n*** Element info: {Using\u003dxpath, value\u003d//td[contains(text(),\u00271604\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat stepDefinitions.StepDefMethods.i_will_get_Id_of_the_flight_and_store_it_into_txt_file(StepDefMethods.java:216)\r\n\tat ✽.Then I will get Id of the flight and store it into txt file(D:/SeleniumProjects/InterviewCucumber/FeatureFiles/BackgroundDemo.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2601333050,
  "status": "passed"
});
formatter.before({
  "duration": 15281190225,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validation Multiple Details with Purchase Flight",
  "description": "",
  "id": "checking-background-verification;validation-multiple-details-with-purchase-flight;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Special"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select source_city from dropdown and destiny_city from dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on FindFlights button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I Validate Navigation to Purchase Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Enter username as \"Lavanya\" and  Address as \"Dmm\" and City as \"ATP\" and State as \"AP\" and Zipcode as \"1445\" and CardTyep as \"Visa\" and CCNumber as \"89657\" and Month as \"5\" and Year as \"2022\" and NameofCard as \"Lav S\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I will get Id of the flight and store it into txt file",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefMethods.i_select_source_city_from_dropdown_and_destiny_city_from_dropdown()"
});
formatter.result({
  "duration": 3378101622,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_click_on_FindFlights_button()"
});
formatter.result({
  "duration": 40097,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_Validate_Navigation_to_Purchase_Page()"
});
formatter.result({
  "duration": 12191354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lavanya",
      "offset": 21
    },
    {
      "val": "Dmm",
      "offset": 47
    },
    {
      "val": "ATP",
      "offset": 65
    },
    {
      "val": "AP",
      "offset": 84
    },
    {
      "val": "1445",
      "offset": 104
    },
    {
      "val": "Visa",
      "offset": 127
    },
    {
      "val": "89657",
      "offset": 150
    },
    {
      "val": "5",
      "offset": 171
    },
    {
      "val": "2022",
      "offset": 187
    },
    {
      "val": "Lav S",
      "offset": 212
    }
  ],
  "location": "StepDefMethods.i_Enter_username_as_and_Address_as_and_City_as_and_State_as_and_Zipcode_as_and_CardTyep_as_and_CCNumber_as_and_Month_as_and_Year_as_and_NameofCard_as(String,String,String,String,String,String,String,String,String,String)"
});
