package pages;

import helpers.Common;
import org.openqa.selenium.By;
import setups.BrowserSetup;

public class ProductsPage {
    private By titlePage = By.xpath("//*[@class='title']");
    private By burgerMenu = By.id("react-burger-menu-btn");
    private By sortDropDown = By.xpath("//*[@class='product_sort_container']");
    private By azSort = By.xpath("//*[@value='az']");
    private By zaSort = By.xpath("//*[@value='za']");
    private By lohiSort = By.xpath("//*[@value='lohi']");
    private By hiloSort = By.xpath("//*[@value='hilo']");
    private By logoutMenu = By.id("logout_sidebar_link");

    Common common = new Common();

    public void readTitlePage(String exTitle) {
       common.verifyText(titlePage, exTitle);
    }

    public void clickBurgerMenu() {
        common.click(burgerMenu);
    }

    public void clickSortDropDown() {
        common.click(sortDropDown);
    }

    public void selectSort(String sort) {
        BrowserSetup.getWebDriver().findElement(By.xpath("//*[@value=\"" + sort + "\"]")).click();
    }

    public void readSort(String desc) {
        System.out.println("Sort: " + desc);
    }
}
