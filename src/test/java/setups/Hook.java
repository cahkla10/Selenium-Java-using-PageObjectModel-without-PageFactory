package setups;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends BrowserSetup {
    @Before
    public void before() throws Exception {
        startChrome();
    }

    @After
    public void after() throws Exception {
        stopChrome();
    }
}
