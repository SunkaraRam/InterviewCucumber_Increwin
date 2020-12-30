package prgs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class PurchasePage extends TestBase{
	
	public PurchasePage(WebDriver driver) {
		
		driver=  this.driver;
		
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(id="inputName") public static WebElement   inputName1;

	@FindBy(id="address") public static WebElement address1;
	
	@FindBy(id="city") public static WebElement city1 ;
	
	@FindBy(id="state") public static WebElement state1;
	
	@FindBy(id="zipCode") public static WebElement zipCode1;
	
	@FindBy(id="cardType") public static WebElement cardType1 ;
	
	@FindBy(id="creditCardNumber") public static WebElement creditCardNumber1;
	
	@FindBy(id="creditCardMonth") public static  WebElement creditCardMonth1 ;
	
	@FindBy(id="creditCardYear") public static  WebElement creditCardYear1;
	
	@FindBy(id="nameOnCard") public static WebElement nameOnCard1 ;
	
	@FindBy(xpath="//input[@type='submit']") public static WebElement submit1 ;
	
	public void PurchageFlight(String name,String address,String city,String state,String zipcode,
			String cardtype11,String creditcardnumber , String creditcardmonth,String creditcardyear,String creditcardname) {
		
		inputName1.sendKeys(name);
		
		address1.sendKeys(address);
		city1.sendKeys(city);
		state1.sendKeys(state);
		zipCode1.sendKeys(zipcode);
		
		Select s = new Select(cardType1);
		
		s.deselectByVisibleText(cardtype11);
		
		creditCardNumber1.sendKeys(creditcardnumber);
		creditCardMonth1.sendKeys(creditcardmonth);
		creditCardYear1.sendKeys(creditcardyear);
		nameOnCard1.sendKeys(creditcardname);
		
		nameOnCard1.click();
		
	
	}
	
	
}
