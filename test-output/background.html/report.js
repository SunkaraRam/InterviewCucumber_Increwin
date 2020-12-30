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
  "duration": 31081240355,
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
  "duration": 4593273374,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_click_on_FindFlights_button()"
});
formatter.result({
  "duration": 30844,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_Validate_Navigation_to_Purchase_Page()"
});
formatter.result({
  "duration": 14671668,
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
  "duration": 3252969958,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_will_get_Id_of_the_flight_and_store_it_into_txt_file()"
});
formatter.result({
  "duration": 17154022949,
  "status": "passed"
});
formatter.after({
  "duration": 1508892652,
  "status": "passed"
});
formatter.before({
  "duration": 11051471896,
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
  "duration": 2368556953,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_click_on_FindFlights_button()"
});
formatter.result({
  "duration": 49863,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_Validate_Navigation_to_Purchase_Page()"
});
formatter.result({
  "duration": 13593178,
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
formatter.result({
  "duration": 3184771713,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_will_get_Id_of_the_flight_and_store_it_into_txt_file()"
});
formatter.result({
  "duration": 5238870949,
  "status": "passed"
});
formatter.after({
  "duration": 1267713079,
  "status": "passed"
});
formatter.before({
  "duration": 8682114044,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validation Multiple Details with Purchase Flight",
  "description": "",
  "id": "checking-background-verification;validation-multiple-details-with-purchase-flight;;4",
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
  "name": "I Enter username as \"Deepthi\" and  Address as \"Dmm\" and City as \"ATP\" and State as \"AP\" and Zipcode as \"15545\" and CardTyep as \"Visa\" and CCNumber as \"12356\" and Month as \"6\" and Year as \"2021\" and NameofCard as \"Deepthi S\"",
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
  "duration": 2173895319,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_click_on_FindFlights_button()"
});
formatter.result({
  "duration": 26731,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_Validate_Navigation_to_Purchase_Page()"
});
formatter.result({
  "duration": 14620776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deepthi",
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
      "val": "15545",
      "offset": 104
    },
    {
      "val": "Visa",
      "offset": 128
    },
    {
      "val": "12356",
      "offset": 151
    },
    {
      "val": "6",
      "offset": 172
    },
    {
      "val": "2021",
      "offset": 188
    },
    {
      "val": "Deepthi S",
      "offset": 213
    }
  ],
  "location": "StepDefMethods.i_Enter_username_as_and_Address_as_and_City_as_and_State_as_and_Zipcode_as_and_CardTyep_as_and_CCNumber_as_and_Month_as_and_Year_as_and_NameofCard_as(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2801504539,
  "status": "passed"
});
formatter.match({
  "location": "StepDefMethods.i_will_get_Id_of_the_flight_and_store_it_into_txt_file()"
});
formatter.result({
  "duration": 5118505290,
  "status": "passed"
});
formatter.after({
  "duration": 911048294,
  "status": "passed"
});
});