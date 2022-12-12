Feature: Youtube Music Search

  @search
  Scenario: User should able to use search function
    Given I open browser
    And I go to youtube music page
    Then I should be in youtube music page
    Then Click Search menu
    And Input text "Slipknot"
    Then I click enter
    Then User should get the correct result
    Then User click the artist
    And User verified the artist page

  @explore
  Scenario: User should able to click explore page
    Given I open browser
    And I go to youtube music page
    Then I should be in youtube music page
    Then I click explore menu
    Then The explore page is opened
    Then I open "Moods & genres" Content Group