# Selenium-Java-using-PageOjectbModel-without-PageFactory

## 1. POM

This automation created using POM design pattern. What is POM? POM stands for Page Object Model. POM is a design pattern used to make automation. Where each page an application or website is used as its own class. This gives an advantage when one of a page's interface changes, then other classes will not be affected. 

## 2. Cucumber dan Gherkin

Then for Scenario scripting, we will use Cucumber and Gherkin.<br/>
What is Cucumber? What is Gherkin?<br/>
**Cucumber** is a tool that supports BDD *(Behavior-Driven Development)*.<br/>
**Gherkin** is a set of grammar rules that makes plain text structured enough to be understood by Cucumber. Scenario scripts are written using Gherkin.<br/><br/>Referensi: https://docs.cucumber.io/docs/guides/overview/

## 3. Preparation

| Unsur        | Item                                                         |
| ------------ | ------------------------------------------------------------ |
| Editor       | Intellij IDEA Community (https://www.jetbrains.com/idea/download/#section=windows) |
| JDK          | JDK 8 (https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) |
| Web Driver   | Chrome Driver (https://chromedriver.chromium.org/downloads)<br />Firefox Driver (https://github.com/mozilla/geckodriver/releases) |
| Browser      | Chrome latest version<br />Mozilla Firefox latest version    |
| Dependencies | artifactId: `selenium-java`, groupId: `org.seleniumhq.selenium` <br />artifactId: `selenium-firefox-driver`, groupId: `org.seleniumhq.selenium`<br />artifactId: `selenium-safari-driver`, groupId: `org.seleniumhq.selenium`<br />artifactId: `selenium-chrome-driver`, groupId: `org.seleniumhq.selenium`<br />artifactId: `selenium-api`, groupId: `org.seleniumhq.selenium`<br />artifactId: `cucumber-junit`, groupId: `info.cukes`<br />artifactId: `cucumber-java`, groupId: `info.cukes`<br />artifactId: `cucumber-core`, groupId: `info.cukes`<br />artifactId: `gherkin`, groupId: `info.cukes`<br />artifactId: `testng`, groupId: `org.testng` <br />artifactId: `maven-clean-plugin`<br />artifactId: `maven-resources-plugin`<br />artifactId: `maven-compiler-plugin`<br />artifactId: `maven-surefire-plugin`<br />artifactId: `maven-jar-plugin`<br />artifactId: `maven-install-plugin`<br />artifactId: `maven-deploy-plugin`<br />artifactId: `maven-site-plugin`<br />artifactId: `maven-project-info-reports-plugin`|

## 4. Installation

Install Editor Intellij Idea Community and JDK in komputer.

## 5. Configuration

#### Windows

###### JDK 8

1. Right-click My Computer > Properties > Advance system settings > Environment Variables > PATH > Edit 
2. Type `C:\Java\java-8\bin` 
3. Click Save

#### Linux dan Mac OS

###### JDK 8

*Automatically set itself*

## 6. Project

#### Clone

Clone this repository using this command `git clone https://github.com/cahkla10/Selenium-Java-using-POM-without-PageFactory` in terminal or command prompt.

### Intellij IDEA Configuration

Open this automation using Intellij IDEA.

##### Project Setting

1. Click File > Project Structure
2. Make sure JDK 8 is selected in Project SDK

##### Plugin

1. Klik Preferences > Plugins
2. Search using keyword `cucumber for java`
3. Click Install
4. Repeat steps 2-3 for plugin `gherkin`

## 7. Package & Class

### Struktur Project

```
|-- test
		|-- java
        			|-- helpers
				|-- pages
				|-- setups
				|-- steps
		|-- resources
				|-- features
```

- `helpers` package for Runner class or other required class
- `pages` package for all page classes.
- `setups` package for all automation configuration.
- `steps` package for all page step definitions.
- `resources` package for all features or non java classes.

## 8. Running Automation

First Way:
- Open TestRunner class and run it.

Second Way:
- Using terminal or cmd, type ```mvn test```

Run and generate report:
- ```mvn test site```
- ```mvn surefire-report:report```
