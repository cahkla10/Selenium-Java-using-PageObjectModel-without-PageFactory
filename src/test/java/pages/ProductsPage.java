package pages;

import helpers.Common;
import org.openqa.selenium.By;
import setups.BrowserSetup;

public class ProductsPage {
    private String titlePage = "//*[@class=\"title\"]";
    private String burgerMenu = "react-burger-menu-btn";
    private String sortDropDown = "//*[@class=\"product_sort_container\"]";
    private String azSort = "//*[@value=\"az\"]";
    private String zaSort = "//*[@value=\"za\"]";
    private String lohiSort = "//*[@value=\"lohi\"]";
    private String hiloSort = "//*[@value=\"hilo\"]";
    private String logoutMenu = "logout_sidebar_link";

    Common common = new Common();

    public void readTitlePage(String exTitle) {
       common.verifyXpathText(titlePage, exTitle);
    }

    public void clickBurgerMenu() {
        common.clickId(burgerMenu);
    }

    public void clickSortDropDown() {
        common.clickXpath(sortDropDown);
    }

    public void selectSort(String sort) {
        BrowserSetup.getWebDriver().findElement(By.xpath("//*[@value=\"" + sort + "\"]")).click();
    }

    public void readSort(String desc) {
        System.out.println("Sort: " + desc);
    }
}