package testS;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import prgs.TestBase;

@RunWith(Cucumber.class)
@CucumberOptions(features= "D:\\SeleniumProjects\\InterviewCucumber\\FeatureFiles\\BackgroundDemo.feature",

glue="stepDefinitions",                                                                                                                                                 

format = {"pretty","html:test-output/background.html","json:json-output/background.json","junit:junit-xml/background.xml"},
	monochrome = true,	
	dryRun = false,
	strict =true,
	tags="@Special")
@Test
public class TestRunner extends TestBase {
	
}
