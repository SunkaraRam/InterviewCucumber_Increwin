package prgs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ReservePage extends TestBase{
	
	public ReservePage(WebDriver driver) {
	
		driver =this.driver;
		
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(xpath="//tbody//tr[1]//td[1]//input[@value='Choose This Flight']") public WebElement chooseFlight;

}
