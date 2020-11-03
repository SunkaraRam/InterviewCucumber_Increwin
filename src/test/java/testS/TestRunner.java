package testS;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.testng.annotations.Test;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import prgs.TestBase;


@RunWith(Cucumber.class)
@CucumberOptions(features= "D:\\SeleniumProjects\\InterviewCucumber\\FeatureFiles\\BackgroundDemo.feature",

glue="stepDefinitions",                                                                                                                                                 

format = {"pretty","html:test-output/background/check.html","json:json-output/background.json","junit:junit-xml/background.xml"},
	monochrome = true,	
	dryRun = false,
	strict =true,
	tags="@Special")
@Test
public class TestRunner extends TestBase {
//	
//	@AfterClass
//	 public static void writeExtentReport() {
//	 Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
//	 }
	
}