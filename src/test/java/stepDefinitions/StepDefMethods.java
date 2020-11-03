package stepDefinitions;

import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Properties;
import java.util.TreeMap;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import prgs.ConfirmationPage;
import prgs.HomePage;
import prgs.PurchasePage;
import prgs.ReservePage;
import prgs.TestBase;

public class StepDefMethods extends stepDefinitions.TestBase{
	
	private WebDriver driver;
	
	ReservePage rp;
	
	TreeMap<String, String> tmap ;
	
	FileWriter fi;
	
	BufferedWriter br;
	
	
	String name ; 
	
	
	int i=0;
	
	
	@After
	public void CloseApp() throws IOException {
//		
//		br.flush();
//		br.close();
		driver.quit();
		
	}
	
	@Before
	public void i_Launch_application_on_ChromeBrowser() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver", "D:\\LatestDrivers\\chromedriver.exe");
		
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		
		driver.manage().deleteAllCookies();
		
//		FileInputStream fi =new FileInputStream("E:\\Interview\\src\\main\\java\\config\\credentials.properties");
//		
//		Properties p = new Properties();
//		
//		p.load(fi);
		
		driver.get("https://blazedemo.com/index.php");
		
	}

	@Then("^I validate the Header of the Page$")
	public void i_validate_the_Header_of_the_Page() throws Throwable {
		
//		HomePage hm = PageFactory.initElements(driver, HomePage.class);
//		
//		Boolean check= hm.checkHeader();
		
		Boolean check = new HomePage(driver).checkHeader();
		
		if (check) {
			System.out.println("Header is displayed");
		}else {
			System.out.println("Header is displayed");
			
		}
		
		new HomePage(driver).SelectSourceAndDestiny("Mexico City", "London");
		
		new ReservePage(driver).chooseFlight.click();
		
		String exp = "purchase";
		
		String navurl = driver.getCurrentUrl();
		
		if (navurl.toLowerCase().contains(exp.toLowerCase())) {
			
			System.out.println("We were navigated to Purchase page");
		
		}
		else {
			System.out.println("We were Not navigated to Purchase page");
		}
		
	}
		

	@Then("^I select source_city from dropdown and destiny_city from dropdown$")
	public void i_select_source_city_from_dropdown_and_destiny_city_from_dropdown() throws Throwable {
		
		
		new HomePage(driver).SelectSourceAndDestiny("Mexico City", "London");
		
		new  ReservePage(driver).chooseFlight.click();
		
	}
	
	@When("^I click on FindFlights button$")
	public void i_click_on_FindFlights_button() throws Throwable {
	   
	}

	@Then("^Validation of user navigation to ReservePage$")
	public void validation_of_user_navigation_to_ReservePage() throws Throwable {
	   
		String exp = "reserve";
		
		String navurl = driver.getCurrentUrl();
		
		if (navurl.toLowerCase().contains(exp.toLowerCase())) {
			
			System.out.println("We were navigated to Reserve page");
		
		}
		else {
			System.out.println("We were Not navigated to Reserve page");
		}
		
	}

	@Given("^I click on Choose This Flight$")
	public void i_click_on_Choose_This_Flight() throws Throwable {
	   
		new  ReservePage(driver).chooseFlight.click();
		
	}

	@Then("^I Validate Navigation to Purchase Page$")
	public void i_Validate_Navigation_to_Purchase_Page() throws Throwable {
		String exp = "purchase";
		
		String navurl = driver.getCurrentUrl();
		
		if (navurl.toLowerCase().contains(exp.toLowerCase())) {
			
			System.out.println("We were navigated to Purchase page");
		
		}
		else {
			System.out.println("We were Not navigated to Purchase page");
		}
	}
	
	@When("^I Enter username as \"([^\"]*)\" and  Address as \"([^\"]*)\" and City as \"([^\"]*)\" and State as \"([^\"]*)\" and Zipcode as \"([^\"]*)\" and CardTyep as \"([^\"]*)\" and CCNumber as \"([^\"]*)\" and Month as \"([^\"]*)\" and Year as \"([^\"]*)\" and NameofCard as \"([^\"]*)\"$")
	public void i_Enter_username_as_and_Address_as_and_City_as_and_State_as_and_Zipcode_as_and_CardTyep_as_and_CCNumber_as_and_Month_as_and_Year_as_and_NameofCard_as(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9, String arg10) throws Throwable {

		PurchasePage PPage = new PurchasePage(driver);
		
		PPage.inputName1.sendKeys(arg1);
		
		PPage.address1.sendKeys(arg2);
		PPage.city1.sendKeys(arg3);
		PPage.state1.sendKeys(arg4);
		PPage.zipCode1.sendKeys(arg5);
		
		Select s = new Select(PPage.cardType1);
		
		s.selectByVisibleText(arg6);
		
		PPage.creditCardNumber1.sendKeys(arg7);
		PPage.creditCardMonth1.clear();
		PPage.creditCardYear1.clear();
		PPage.creditCardMonth1.sendKeys(arg8);
		PPage.creditCardYear1.sendKeys(arg9);
		PPage.nameOnCard1.sendKeys(arg10);
		
		PPage.submit1.click();
		
		
		
		name = arg1;
		
		
	}


	@Then("^I will get Id of the flight and store it into txt file$")
	public void i_will_get_Id_of_the_flight_and_store_it_into_txt_file() throws Throwable {
	    ConfirmationPage Cpage = new ConfirmationPage(driver);
	    
	    Thread.sleep(2000);
	    
	    String flid = Cpage.flightId.getText();
	    
	    driver.navigate().back();
		driver.get(driver.getCurrentUrl());
		
		tmap = new TreeMap<String, String>();
		
		Thread.sleep(2000);
		
	    tmap.put(name, flid);
	    
	    fi = new FileWriter("e://RamFlights.txt");
	    
	    br = new BufferedWriter(fi);
	   
	    
	    
	    if (i==2) {
		
	    	br.flush();
	    	br.close();
	    	
		}
	    
	    System.out.println(tmap);
	    
	    
	    
	   
	}




}
