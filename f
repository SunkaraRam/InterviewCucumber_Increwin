warning: LF will be replaced by CRLF in src/test/java/testS/BrokenLinks.java.
The file will have its original line endings in your working directory
[1mdiff --git a/src/test/java/testS/BrokenLinks.java b/src/test/java/testS/BrokenLinks.java[m
[1mindex 7e2776e..a4f092a 100644[m
[1m--- a/src/test/java/testS/BrokenLinks.java[m
[1m+++ b/src/test/java/testS/BrokenLinks.java[m
[36m@@ -22,7 +22,7 @@[m [mpublic class BrokenLinks {[m
 		[m
 		driver.get("https://www.flipkart.com/");[m
 		[m
[31m-		//Thread.sleep(5000);[m
[32m+[m		[32mThread.sleep(5000);[m
 		[m
 		List<WebElement> allLinks = driver.findElements(By.tagName("a"));[m
 		[m
[36m@@ -32,7 +32,7 @@[m [mpublic class BrokenLinks {[m
 		[m
 		List<WebElement> deactiveLinks = new ArrayList<WebElement>();[m
 		[m
[31m-//		[m
[32m+[m[41m		[m
 //		for (int i = 0; i < allLinks.size(); i++) {[m
 //			[m
 //			if (allLinks.get(i).getAttribute("href")!=null &&(!allLinks.get(i).getAttribute("href").contains("javascript"))) {[m
[36m@@ -44,7 +44,7 @@[m [mpublic class BrokenLinks {[m
 //			}[m
 //			[m
 //		}[m
[31m-//		[m
[32m+[m[41m		[m
 		System.out.println("All Links  ----->" + allLinks.size());[m
 		[m
 		System.out.println("Active Links  ----->" + activeLinks.size());[m
