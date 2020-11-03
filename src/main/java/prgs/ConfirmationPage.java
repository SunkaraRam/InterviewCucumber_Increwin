package prgs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ConfirmationPage extends TestBase{
	
	public ConfirmationPage(WebDriver driver) {

		this.driver =driver;
		PageFactory.initElements(driver, this);
	}
@FindBy(xpath="//td[contains(text(),'1604')]") public static WebElement flightId; 
}
