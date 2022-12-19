package pages;

import helpers.Common;
import org.openqa.selenium.By;
import setups.ChromePool;

public class ProductsPage {
    private String titlePage = "//*[@class=\"title\"]";
    private String burgerMenu = "react-burger-menu-btn";
    private String sortDropDown = "//*[@class=\"product_sort_container\"]";
    private String azSort = "//*[@value=\"az\"]";
    private String zaSort = "//*[@value=\"za\"]";
    private String lohiSort = "//*[@value=\"lohi\"]";
    private String hiloSort = "//*[@value=\"hilo\"]";
    private String logoutMenu = "logout_sidebar_link";
    private int delay = 500;

    Common common = new Common();

    public void readTitlePage() throws InterruptedException{
       common.delay(delay);
       common.verifyXpathText(titlePage, "PRODUCTS");
    }

    public void clickBurgerMenu() throws InterruptedException{
        common.delay(delay);
        common.clickId(burgerMenu);
    }

    public void clickSortDropDown() throws InterruptedException{
        common.delay(delay);
        common.clickXpath(sortDropDown);
    }

    public void selectSort(String sort) throws InterruptedException{
        common.delay(delay);
        ChromePool.getChromeInstance().findElement(By.xpath("//*[@value=\"" + sort + "\"]")).click();
    }

    public void readSort(String desc) throws InterruptedException{
        common.delay(delay);
        System.out.println("Sort: " + desc);
    }
}
