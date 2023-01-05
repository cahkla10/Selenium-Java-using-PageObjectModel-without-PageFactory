package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ProductsPage;

public class ProductsStep {
    ProductsPage productsPage = new ProductsPage();

    @When("^user click sort drop down$")
    public void user_click_sort_drop_down() throws Throwable {
        productsPage.clickSortDropDown();
    }

    @When("^user select sort \"([^\"]*)\"$")
    public void user_select_sort(String sort) throws Throwable {
        productsPage.selectSort(sort);
    }

    @Then("^product will be sorted \"([^\"]*)\"$")
    public void product_will_be_sorted(String desc) throws Throwable {
        productsPage.readSort(desc);
    }
}