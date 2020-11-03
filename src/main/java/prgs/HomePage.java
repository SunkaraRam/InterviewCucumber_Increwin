package prgs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class HomePage extends TestBase{
	
	public HomePage(WebDriver driver) {
		
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
		
	}
	
	@FindBy(xpath="//div[@class='container']//h1") WebElement header;

	@FindBy(xpath="//select[@name = 'fromPort']") WebElement source;
	
	@FindBy(xpath="//select[@name = 'toPort']") WebElement destination;
	
	@FindBy(xpath="//input[@type='submit']") WebElement  btnSubmit;
	
	public void SelectSourceAndDestiny(String source1,String destiny) {
		
		Select s = new Select(source);
		
		s.selectByVisibleText(source1);
		
		Select s1 = new Select(destination);
		
		s1.selectByVisibleText(destiny);
		
		btnSubmit.click();
		
	}
	public Boolean checkHeader() {
		
		if (header.isDisplayed()) {
			
			return true;
		}else {
			return false;
		}
		
		
	}
	
	
}
