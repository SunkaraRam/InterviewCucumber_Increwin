Feature: Checking Background Verification

  Scenario: Validate Header
    Then I validate the Header of the Page
   
  Scenario: Validate Navigation Page
  	Then I select source_city from dropdown and destiny_city from dropdown  
  	When I click on FindFlights button
  	Then Validation of user navigation to ReservePage
  	
  Scenario: Validation of Navigaton to Purchase Page
  	Then I select source_city from dropdown and destiny_city from dropdown  
  	When I click on FindFlights button
  	Then I Validate Navigation to Purchase Page
  
@Special	
Scenario Outline: Validation Multiple Details with Purchase Flight
		Given I select source_city from dropdown and destiny_city from dropdown  
		When I click on FindFlights button
  	Then I Validate Navigation to Purchase Page
  	When I Enter username as "<username>" and  Address as "<Address>" and City as "<City>" and State as "<State>" and Zipcode as "<Zipcode>" and CardTyep as "<CardType>" and CCNumber as "<CCNumber>" and Month as "<Month>" and Year as "<Year>" and NameofCard as "<NameofCard>" 
   	Then I will get Id of the flight and store it into txt file
   	
Examples:
|username|Address|City|State|Zipcode|CardType|CCNumber|Month|Year|NameofCard|
|SunkaraRam|Dmm|ATP|AP|1234|Visa|78922|3|2021|Ram S|
|Lavanya|Dmm|ATP|AP|1445|Visa|89657|5|2022|Lav S|
|Deepthi|Dmm|ATP|AP|15545|Visa|12356|6|2021|Deepthi S|

